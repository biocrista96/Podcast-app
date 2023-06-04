import { getTopPodcasts, getPodcastDetail, getEpisodes } from "../services/podcast";
import  podcastActions from "./actionsConstants";


const localStoragePodcasts = 'podcastsList';
const localStorageLastTime = 'lastTimeRequested';

export const getPodcastsActionCreator = (updateList) =>{
  return async (dispatch)=>{

    dispatch({type: podcastActions.getPodcastsLoading})

    try{
      
      let response 

      if(updateList) { 
       const callResponse = await getTopPodcasts()
       response = callResponse.feed.entry
       localStorage.setItem(localStoragePodcasts, JSON.stringify(response))
      }else{
        response = JSON.parse(localStorage.getItem(localStoragePodcasts));
      } 

      dispatch({
        type: podcastActions.getPodcastsSuccess,
        payload:response
      });
    }
    catch(error){
      dispatch({
        type: podcastActions.getPodcastsFailed,
        payload:error.message
      });
    }
  } 
}

export const getpodcastDetailActionCreator = (id) =>{
  return async (dispatch) =>{
    dispatch({type:podcastActions.getPodcastLoading})
    
    try{
      const response = await getPodcastDetail(id); 

      dispatch({
        type: podcastActions.getPodcastSuccess,
        payload: response
      });
    }catch(error){
      dispatch({
        type: podcastActions.getPodcastFailed,
        payload: error.message
      });
    }
  }
}

export const getEpisodesActionCreator = (url)=>{
  return async (dispatch) =>{

    dispatch({type:podcastActions.getEpisodesLoading})

    try{
      const response = await getEpisodes(url);
      dispatch({
        type: podcastActions.getEpisodesSuccess,
        payload: response
      });
    }catch(error){
      dispatch({
        type: podcastActions.getEpisodesFailed,
        payload: error.message
      });
    }
  }
}

export const setLastTimeRequestedActionCreator = () =>{
  return async (dispatch)=>{
    localStorage.setItem(localStorageLastTime, String( new Date()));
    dispatch({
      type:podcastActions.setLastTimeRequested,
      payload: new Date()
    })
  }

}


export const getLastTimeRequestedActionCreator = () =>{
  return async (dispatch)=>{
    const lastTime = localStorage.getItem(localStorageLastTime);
    dispatch({
      type:podcastActions.setLastTimeRequested,
      payload: new Date(lastTime)
    })
  }

}