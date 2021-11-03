import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.aca.so',
  timeout: 10000,
});

// api.interceptors.response.use(
//   response => {
//     return response;
//   },
//   error => {
//     if (error.response.status === 403) {

//     }
//     return error;
//   },
// );
export default api;
