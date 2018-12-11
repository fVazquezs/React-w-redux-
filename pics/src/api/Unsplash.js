import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID ecd3e12eff49af240ff31421a168afa9aac7a970abd7254039a9ef7626c3485d'
    }
});