import axios from 'axios';

import {instanst} from './api';
import {Movie} from '../types';

export type ApiResponsePopular = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};

export const getPopular = async (): Promise<Movie[]> => {
  try {
    const response = await instanst.get<ApiResponsePopular>('/movie/popular');
    const popular = response.data.results;
    if (response.status !== 200) {
      throw new Error(`Unexpected status code: ${response.status}`);
    }

    if (!Array.isArray(popular)) {
      throw new Error('Invalid response format: expected an array');
    }

    return popular;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error:', error.response?.data || error.message);
    } else {
      console.error('Unexpected error:', error);
    }
    throw error;
  }
};
