import  podcastActions from "./actionsConstants";

const initialState = {
  isLoading:false,
  error:null,
  podcasts: [],
  podcastDetail: null,
  episodes: [],
  lasTimeRequested:null
};

const podcastReducer = (
  state = initialState,
  action
) => {
  switch(action.type){
    case podcastActions.getPodcastsLoading:{
      return { 
        ...state, 
        isLoading: true, 
        error: null 
      }
    }
    case podcastActions.getPodcastsSuccess:{
      return { 
        ...state, 
        isLoading: false, 
        podcasts: action.payload 
      }
    }
    case podcastActions.getPodcastsFailed:{
      return { 
        ...state, 
        isLoading: false, 
        error: action.payload 
      }
    }
    case podcastActions.getPodcast:{

      const podcastsList = state.podcasts

      const podcastDetail = podcastsList.filter(p =>{ 
        return p.id.attributes['im:id'] === action.payload
      })[0]

      return { 
        ...state, 
        isLoading: false, 
        podcastDetail: podcastDetail
      }
    }
    case podcastActions.getEpisodesLoading:{
      return { 
        ...state, 
        isLoading: true, 
        episodes:[],
        error: null 
      }
    }
    case podcastActions.getEpisodesSuccess:{
      return { 
        ...state, 
        isLoading: false, 
        episodes: action.payload 
      }
    }
    case podcastActions.getEpisodesFailed:{
      return { 
        ...state, 
        isLoading: false, 
        error: action.payload
      }
    }
    case podcastActions.setLastTimeRequested:{
      return { 
        ...state, 
        lasTimeRequested: action.payload
      }
    }
    case podcastActions.getLasTimeRequested:{
      return { 
        ...state, 
        lasTimeRequested: action.payload
      }
    }
    default:
      return state;
  }
}

export default podcastReducer