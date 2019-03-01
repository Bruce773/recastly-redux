import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';

var handleVideoSearch = (q) => {
  //TODO:  Write an asynchronous action to handle a video search!
  return () => {
    return searchYouTube(
      {
        key: YOUTUBE_API_KEY,
        query: q,
      },
      (data) => {
        changeVideoList(data);
        changeVideo(data[0]);
      }
    );
  };
};

// var handleVideoSearch = (q) => {
//   //TODO:  Write an asynchronous action to handle a video search!
//   return (dispatch) => {
//     searchYouTube(
//       {
//         key: YOUTUBE_API_KEY,
//         query: q,
//       },
//       (data) => data
//     ).then((result) => {
//       dispatch({
//         type: 'SEARCH',
//         videos: result,
//       });
//     });
//   };
// };

export default handleVideoSearch;

// should return object with keys that
