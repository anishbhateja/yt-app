import axios from 'axios';

const KEY = 'AIzaSyDRNrB7aBu4u-8ZifP6YigM0Mqg3dfwzBQ';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
    type: 'video',
  },
});
