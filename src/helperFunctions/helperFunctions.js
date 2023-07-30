export const convertDateTimeToHumanReadable = (dateTime) => {
  const utcDate = new Date(dateTime);
  const localDate = new Date();

  const timeDifferenceInSeconds = Math.floor((localDate - utcDate) / 1000);

  const seconds = timeDifferenceInSeconds % 60;
  const minutes = Math.floor(timeDifferenceInSeconds / 60) % 60;
  const hours = Math.floor(timeDifferenceInSeconds / 3600) % 24;
  const days = Math.floor(timeDifferenceInSeconds / 86400);

  console.log("Days: ", days);
  if (days > 0) {
    return ` · ${days}d`;
  }
  console.log("hours: ", hours);
  if (hours > 0) {
    return ` · ${hours}h`;
  }
  console.log("minutes: ", minutes);
  if (minutes > 0) {
    return ` · ${minutes}m`;
  }
  console.log("seconds: ", seconds);
  return ` · ${seconds}s`;
};
