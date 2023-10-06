import axios from 'axios';
import { BACKEND_URL } from '../utils/constants';

const Api = axios.create({
    baseURL: BACKEND_URL //your api URL
});

export default Api;