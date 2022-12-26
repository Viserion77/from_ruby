const beginningOfDay = (date: Date) => {
  const newDate = new Date(date);
  newDate.setHours(0, 0, 0, 0);
  return newDate;
};

const endOfDay = (date: Date) => {
  const newDate = new Date(date);
  newDate.setHours(23, 59, 59, 999);
  return newDate;
};

const yesterday = () => {
  const date = new Date();
  date.setDate(date.getDate() - 1);
  return date;
};

const setBackgroundCompatibility = () => {
  Date.prototype.beginningOfDay = function () {
    return beginningOfDay(this);
  };

  Date.prototype.endOfDay = function () {
    return endOfDay(this);
  };

  Object.assign(Date, {
    yesterday() {
      return yesterday();
    },
  });
};

export default {beginningOfDay, yesterday, setBackgroundCompatibility};
