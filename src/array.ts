import object from './object';

const isEmpty = (value: Array<any>) => {
  return object.isNullOrUndefined(value) || value.length === 0;
};

const setBackgroundCompatibility = () => {
  Array.prototype.isEmpty = function () {
    return isEmpty(this);
  };

  Array.prototype.isBlank = function () {
    return isEmpty(this);
  };

  Array.prototype.isPresent = function () {
    return !isEmpty(this);
  };
};

export default {isEmpty, setBackgroundCompatibility};
