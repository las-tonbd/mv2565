import axios from 'axios';
export const BASE_URL_IMAGE = 'https://image.tmdb.org/t/p';

export const instanst = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '45282aaf41533dedb1e9d787cb0c8b7c',
  },
});
