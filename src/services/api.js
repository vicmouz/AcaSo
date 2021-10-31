import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.aca.so',
  timeout: 10000,
});

export default api;
