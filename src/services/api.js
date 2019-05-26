import axios from 'axios';

const api = axios.create({
    baseURL: 'https://omniteste.herokuapp.com'
});

export default api;