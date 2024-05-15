import {
  getTopPodcasts,
  getPodcastDetail,
  getEpisodes,
} from "../services/podcast";
import podcastActions from "./actionsConstants";

const localStoragePodcasts = "podcastsList";
const localStorageLastTime = "lastTimeRequested";

export const getPodcastsActionCreator = (updateList) => {
  return async (dispatch) => {
    dispatch({ type: podcastActions.getPodcastsLoading });

    try {
      let response = JSON.parse(localStorage.getItem(localStoragePodcasts));
      if (updateList || response == null) {
        const callResponse = await getTopPodcasts();
        response = callResponse.entry;
        localStorage.setItem(localStoragePodcasts, JSON.stringify(response));
      }
      dispatch({
        type: podcastActions.getPodcastsSuccess,
        payload: response,
      });
    } catch (error) {
      dispatch({
        type: podcastActions.getPodcastsFailed,
        payload: error.message,
      });
    }
  };
};

export const getpodcastDetailActionCreator = (id) => {
  return async (dispatch) => {
    dispatch({ type: podcastActions.getPodcast, payload: id });
  };
};

export const getEpisodesActionCreator = (id) => {
  return async (dispatch) => {
    dispatch({ type: podcastActions.getEpisodesLoading });

    try {
      const response = await getPodcastDetail(id);
      let podcastUrl = response.results[0].feedUrl;

      if ((podcastUrl, "url")) {
        console.log(podcastUrl);
        try {
          const response = await getEpisodes(podcastUrl);
          console.log(response);
          dispatch({
            type: podcastActions.getEpisodesSuccess,
            payload: response,
          });
        } catch (error) {
          dispatch({
            type: podcastActions.getEpisodesFailed,
            payload: error.message,
          });
        }
      }
    } catch (error) {
      dispatch({
        type: podcastActions.getEpisodesFailed,
        payload: error.message,
      });
    }
  };
};

export const setLastTimeRequestedActionCreator = () => {
  return (dispatch) => {
    localStorage.setItem(localStorageLastTime, String(new Date()));
    dispatch({
      type: podcastActions.setLastTimeRequested,
      payload: new Date(),
    });
  };
};

export const getLastTimeRequestedActionCreator = () => {
  return (dispatch) => {
    const lastTime = localStorage.getItem(localStorageLastTime);
    dispatch({
      type: podcastActions.getLasTimeRequested,
      payload: new Date(lastTime),
    });
  };
};

export const setEpisodeActionCreator = (id) => {
  return (dispatch) => {
    dispatch({
      type: podcastActions.setEpisode,
      payload: id,
    });
  };
};

export const cleanEpisodeActionCreator = () => {
  return (dispatch) => {
    dispatch({
      type: podcastActions.cleanEpisode,
    });
  };
};
