import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-9127c-default-rtdb.firebaseio.com/'
});

export default instance;