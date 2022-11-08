const isNull = (value: any) => value === null;

const isUndefined = (value: any) => value === undefined;

const isNullOrUndefined = (value: any) => isNull(value) || isUndefined(value);

const isEmpty = (value: Object) => {
  return isNullOrUndefined(value) || Object.keys(value).length === 0;
};

const setBackgroundCompatibility = () => {
  Object.prototype.isEmpty = function () {
    return isEmpty(this);
  };

  Object.prototype.isBlank = function () {
    return isEmpty(this);
  };

  Object.prototype.isPresent = function () {
    return !isEmpty(this);
  };

  Object.prototype.isNull = function () {
    return isNull(this);
  };

  Object.prototype.isUndefined = function () {
    return isUndefined(this);
  };

  Object.prototype.isNullOrUndefined = function () {
    return isNullOrUndefined(this);
  };
};

export default {
  isEmpty,
  setBackgroundCompatibility,
  isNull,
  isUndefined,
  isNullOrUndefined,
};
