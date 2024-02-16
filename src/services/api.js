import axios from "axios";
import qs from 'qs'

const api = axios.create({
  baseURL: 'http://localhost:3000',
  paramsSerializer: params => {
   params = { ...params };

    return qs.stringify(params)
  },
});

export default api;