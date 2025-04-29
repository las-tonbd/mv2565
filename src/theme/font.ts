import {isIpad} from '../utils/dimensions';

export const Fonts = {
  Montserrat_Regular: 'Montserrat-Regular',
};

export const reponsiveFont = (value: number) => {
  if (isIpad) {
    return value * 1.5;
  }
  return value;
};
export const reponsiveIcon = (value: number) => {
  if (isIpad) {
    return value * 2;
  }
  return value;
};
