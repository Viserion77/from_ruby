import fixnum from './fixnum';
import time from './time';

export const setBackgroundCompatibility = () => {
  // @ts-ignore
  Number.prototype.days = function () {
    return fixnum.day(this);
  };

  // @ts-ignore
  Date.prototype.beginningOfDay = function () {
    return time.beginningOfDay(this);
  };

  Object.assign(Date, {
    yesterday() {
      return time.yesterday();
    },
  });
};
