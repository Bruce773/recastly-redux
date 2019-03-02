import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';
import store from '../store/store.js';

var VideoListContainer = ({ dispatch }) => {
  <VideoList

    handleVideoListEntryTitleClick={changeVideo}
    videos={store.getState().VideoList}
  />;
};

VideoListContainer = connect()(VideoListContainer);
// connecto vidoeList component
// component needs videoList array (list)
// onClick={() => handleVideoListEntryTitleClick(video)}

//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.

export default VideoListContainer;
