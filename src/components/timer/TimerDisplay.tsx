import { formatDuration, formatTime } from "@/lib/format";

export const TimerDisplay = ({
  duration,
  totalToday,
}: {
  duration: number;
  totalToday: number;
}) => {
  const { hours, minutes, secs } = formatDuration(duration);
  return (
    <div className="mb-8 text-center">
      <h2 className="min-w-32 text-center text-[6rem] tracking-tighter">
        <span>{hours}</span>:<span>{minutes}</span>:
        <span className="text-neutral-500">{secs}</span>
      </h2>
      <p className="space-x-1 text-sm text-neutral-500">
        <span>Total time tracked today:</span>
        <span className="font-semibold text-neutral-800 dark:text-neutral-200">
          {formatTime(totalToday)}
        </span>
      </p>
    </div>
  );
};
