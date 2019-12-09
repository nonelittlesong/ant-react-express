import axios from 'axios';

const config = {
  baseURL: '/api',
  timeout: 10000
};

axios.interceptors.response.use(
  (res) => res.data
);

export function get(url) {
  return axios.get(url, config);
}

export function post(url, data) {
  return axios.post(url, data, config);
}
