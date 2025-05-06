import axios from 'axios';
import {Movie} from '../types';
import {instanst} from './api';

export type ApiResponseUpComing = {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};

export const getMovieLatest = async (
  mindate: string,
  maxdate: string,
): Promise<Movie[]> => {
  try {
    const response = await instanst.get<ApiResponseUpComing>('/movie/popular', {
      params: {
        'release_date.gte': mindate,
        'release_date.lte': maxdate,
      },
    });
    const latest = response.data.results;
    if (response.status !== 200) {
      throw new Error(`Unexpected status code: ${response.status}`);
    }

    if (!Array.isArray(latest)) {
      throw new Error('Invalid response format: expected an array');
    }

    return latest;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error:', error.response?.data || error.message);
    } else {
      console.error('Unexpected error:', error);
    }
    throw error;
  }
};
