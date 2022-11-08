import object from './object';

const isEmpty = (value: String) => {
  return object.isNullOrUndefined(value) || value.trim().length === 0;
};

const setBackgroundCompatibility = () => {
  String.prototype.isEmpty = function () {
    return isEmpty(this);
  };

  String.prototype.isBlank = function () {
    return isEmpty(this);
  };

  String.prototype.isPresent = function () {
    return !isEmpty(this);
  };
};

export default {isEmpty, setBackgroundCompatibility};
