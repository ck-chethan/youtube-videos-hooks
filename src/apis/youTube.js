import axios from 'axios';

const KEY = 'AIzaSyCXf_PhaLxF1h-W6a7AGh4yQh7hawZ5v6I';


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        tpe: 'video',
        key: KEY
    }
});