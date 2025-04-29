import {isIpad} from './dimensions'; // Đảm bảo bạn đã khai báo đúng

export const scaleWigth = (value: number) => {
  if (isIpad) {
    return value * 3;
  }
  return value;
};

export const scaleHeght = (value: number) => {
  if (isIpad) {
    return value * 1.2;
  }
  return value;
};
