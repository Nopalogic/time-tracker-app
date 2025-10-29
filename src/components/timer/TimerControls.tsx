import { PauseIcon, PlayIcon, SquareIcon, TimerResetIcon } from "lucide-react";
import { Button } from "../ui/button";

export const TimerControls = ({
  isRunning,
  isPaused,
  onStart,
  onStop,
  onPause,
  onReset,
}: {
  isRunning: boolean;
  isPaused: boolean;
  onStart: () => void;
  onStop: () => void;
  onPause: () => void;
  onReset: () => void;
}) => (
  <div>
    {isRunning ? (
      <div className="flex items-center justify-center gap-3">
        <Button
          variant="outline"
          className="h-10 rounded-full"
          onClick={onReset}
        >
          <TimerResetIcon />
        </Button>
        <Button
          variant="outline"
          className="size-12 rounded-full bg-neutral-200"
          onClick={onPause}
        >
          {isPaused ? (
            <PlayIcon fill="currentColor" />
          ) : (
            <PauseIcon fill="currentColor" />
          )}
        </Button>
        <Button
          variant="outline"
          className="size-10 rounded-full hover:bg-red-600 dark:hover:bg-red-600 hover:text-white"
          onClick={onStop}
        >
          <SquareIcon fill="currentColor" />
        </Button>
      </div>
    ) : (
      <div className="group relative inline-flex">
        <div className="animate-tilt absolute -inset-px rounded-xl bg-linear-to-r from-sky-500 to-indigo-500 opacity-70 blur-md transition-all duration-1000 group-hover:-inset-1 group-hover:opacity-100 group-hover:duration-200" />
        <Button
          className="relative inline-flex size-12 items-center justify-center rounded-full bg-linear-to-r from-sky-500 to-indigo-500 text-white shadow-lg"
          onClick={onStart}
        >
          <PlayIcon fill="currentColor" />
        </Button>
      </div>
    )}
  </div>
);
