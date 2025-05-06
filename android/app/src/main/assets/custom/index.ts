import {Platform} from 'react-native';

export const Icons = {
  IconChart: Platform.select({
    ios: 'chart',
    android: 'asset:/icons/chart.png',
  }),
  IconMovie: Platform.select({
    ios: 'movie',
    android: 'asset:/icons/movie.png',
  }),
  IconTrendding: Platform.select({
    ios: 'trendding',
    android: 'asset:/icons/trendding.png',
  }),
};
