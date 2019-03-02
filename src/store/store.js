import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';
import exampleVideoData from './../data/exampleVideoData.js';
import { composeWithDevTools } from 'redux-devtools-extension';

// TODO:  Create your redux store, apply thunk as a middleware, and export it!

const initialState = {
  videoList: [],
  currentVideo: null
};

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  ));

export default store;
