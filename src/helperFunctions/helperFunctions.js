export const convertDateTimeToHumanReadable = (dateTime) => {
  const utcDate = new Date(dateTime);
  const localDate = new Date();

  const timeDifferenceInSeconds = Math.floor((localDate - utcDate) / 1000);

  const seconds = timeDifferenceInSeconds % 60;
  const minutes = Math.floor(timeDifferenceInSeconds / 60) % 60;
  const hours = Math.floor(timeDifferenceInSeconds / 3600) % 24;
  const days = Math.floor(timeDifferenceInSeconds / 86400);

  if (days > 0) {
    return ` · ${days}d`;
  }
  if (hours > 0) {
    return ` · ${hours}h`;
  }
  if (minutes > 0) {
    return ` · ${minutes}m`;
  }
  return ` · ${seconds}s`;
};
