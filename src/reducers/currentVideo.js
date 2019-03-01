import Redux from 'redux';
import changeVideo from '../actions/currentVideo.js';
// import store from '../store/store.js';

var currentVideoReducer = (state = null, action) => {
  //TODO: define a reducer for the currentVideo field of our state.
  if (action.type === 'CHANGE_VIDEO') {
    // return Object.assign({}, state, {
    //   currentVideo: action.video
    // });
    return action.video;
  }
  return state;
};

export default currentVideoReducer;
