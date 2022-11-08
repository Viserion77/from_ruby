const days = (value: Number) => {
  const numberDays = parseInt(value.toString());
  const date = new Date(0);

  date.setUTCSeconds(numberDays * 86400);
  return date;
};

const setBackgroundCompatibility = () => {
  Number.prototype.days = function () {
    return days(this);
  };

  Number.prototype.day = function () {
    return days(this);
  };
};

export default {days, setBackgroundCompatibility};
