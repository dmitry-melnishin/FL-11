let formatTime = (min) => {
  let days = 0,
      hours = 0,
      oneDay = 1440,
      oneHour = 60;

  if (min >= oneDay) {
    days = parseInt(min / oneDay);
    min = min - days * oneDay;
  }

  if (min >= oneHour) {
    hours = parseInt(min / oneHour);
    min = min - hours * oneHour;
  }

  return `${days} day(s) ${hours} hour(s) ${min} minute(s)`;
}

formatTime(120);
formatTime(59);
formatTime(3601);
