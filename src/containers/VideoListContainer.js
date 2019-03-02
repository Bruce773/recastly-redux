import React from 'react';
import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';
import store from '../store/store.js';

// var VideoListContainer = () => (
//   <VideoList />
// );

const mapStateToProps = (state) => ({ videos: state.videoList });
const mapDispatchToProps = (dispatch) => ({
  handleVideoListEntryTitleClick: (video) => {
    dispatch(changeVideo(video));
  },
});

const VideoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoList);
// connecto vidoeList component
// component needs videoList array (list)
// onClick={() => handleVideoListEntryTitleClick(video)}

//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.

export default VideoListContainer;
