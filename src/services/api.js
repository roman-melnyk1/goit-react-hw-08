import axios from 'axios';

const BASE_URL = 'https://connections-api.herokuapp.com';

export const api = axios.create({
  baseURL: BASE_URL,
});

export const setAuthHeader = token => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  api.defaults.headers.common.Authorization = '';
};
