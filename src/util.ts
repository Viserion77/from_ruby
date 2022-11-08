import array from './array';
import object from './object';
import string from './string';
import fixnum from './fixnum';
import time from './time';

export const setFullBackgroundCompatibility = () => {
  time.setBackgroundCompatibility();
  array.setBackgroundCompatibility();
  object.setBackgroundCompatibility();
  fixnum.setBackgroundCompatibility();
  string.setBackgroundCompatibility();
};
