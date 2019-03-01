import Redux from 'redux';
import sampleData from '../data/exampleVideoData'

var videoListReducer = (state = [], action) => {
  //TODO: define a reducer for the videoList field of our state.
  if(action.type === 'CHANGE_VIDEO_LIST'){
    return action.videos;
  }
  return state;
};

export default videoListReducer;
