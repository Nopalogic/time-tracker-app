export const calculateDuration = (
  startTime: Date,
  endTime: Date | null,
): number => {
  if (!endTime) {
    return Math.floor((new Date().getTime() - startTime.getTime()) / 1000);
  }
  return Math.floor((endTime.getTime() - startTime.getTime()) / 1000);
};

export const formatDuration = (duration: number) => {
  const hours = Math.floor(duration / 3600);
  const minutes = Math.floor((duration % 3600) / 60);
  const secs = duration % 60;

  return {
    hours: String(hours).padStart(2, "0"),
    minutes: String(minutes).padStart(2, "0"),
    secs: String(secs).padStart(2, "0"),
  };
};

export const formatDate = (date: string) => {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    day: "numeric",
    month: "short",
  }).format(new Date(date));
};

export const formatTime = (duration: number) => {
  const { hours, minutes, secs } = formatDuration(duration);
  return `${hours}:${minutes}:${secs}`;
};
