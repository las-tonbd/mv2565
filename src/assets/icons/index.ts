import {Platform} from 'react-native';

export const Icons = {
  IconChart: Platform.select({
    ios: 'chart',
    android: 'asset:/icons/chart.png',
  }),
  IconMovieTV: Platform.select({
    ios: 'movieTV',
    android: 'asset:/icons/movieTV.png',
  }),
  IconTrendding: Platform.select({
    ios: 'trendding',
    android: 'asset:/icons/trendding.png',
  }),
  IconSearch: Platform.select({
    ios: 'search',
    android: 'asset:/icons/search.png',
  }),
  IconMovie: Platform.select({
    ios: 'movie',
    android: 'asset:/icons/movie.png',
  }),
  IconSetting: Platform.select({
    ios: 'setting',
    android: 'asset:/icons/setting.png',
  }),
  IconGame: Platform.select({
    ios: 'game',
    android: 'asset:/icons/game.png',
  }),
};
