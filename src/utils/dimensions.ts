import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export const DIMENSIONS = {
  width,
  height,
};

export const isIpad = width > 440;
