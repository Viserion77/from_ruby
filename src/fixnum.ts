const day = (value: Number) => {
  const numberDays = parseInt(value.toString());
  const date = new Date(0);

  date.setUTCSeconds(numberDays * 86400);
  return date;
};

export default {day};
