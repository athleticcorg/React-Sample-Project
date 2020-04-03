import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-new-e1d50.firebaseio.com/'
});

export default instance;