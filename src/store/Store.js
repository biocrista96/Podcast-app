import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import podcastReducer from './PodcastReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(podcastReducer,composeWithDevTools(applyMiddleware(thunk)));

export default store;