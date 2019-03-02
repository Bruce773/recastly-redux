import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';

var handleVideoSearch = (q) => {
  //TODO:  Write an asynchronous action to handle a video search!
  return (dispatch) => {
    return searchYouTube(
      {
        key: YOUTUBE_API_KEY,
        query: q || 'train'
      },
      (data) => {
        dispatch(changeVideoList(data));
        dispatch(changeVideo(data[0]));
      }
    );
  };
};

export default handleVideoSearch;

// should return object with keys that
