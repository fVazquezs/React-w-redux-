import axios from 'axios';

const KEY = 'AIzaSyCwPm6pvCcHPJ7OmBuak7EET8XYJykK9z0';


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
    }
});