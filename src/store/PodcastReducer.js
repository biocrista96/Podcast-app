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
    case podcastActions.getPodcastLoading:{
      return { 
        ...state, 
        isLoading: true, 
        podcastDetail:null,
        error: null 
      }
    }
    case podcastActions.getPodcastSuccess:{
      return { 
        ...state, 
        isLoading: false, 
        podcastDetail: action.payload 
      }
    }
    case podcastActions.getPodcastFailed:{
      return { 
        ...state, 
        isLoading: false, 
        error: action.payload 
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
      break;
  }
}

export default podcastReducer