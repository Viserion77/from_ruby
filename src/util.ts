import fixnum from './fixnum';

export const setBackgroundCompatibility = () => {
  // @ts-ignore
  Number.prototype.days = function () {
    return fixnum.day(this);
  };
};
