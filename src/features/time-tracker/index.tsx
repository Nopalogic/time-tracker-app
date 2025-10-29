import { TimerControls } from "@/components/timer/TimerControls";
import { TimerDisplay } from "@/components/timer/TimerDisplay";
import { useTimer } from "@/hooks/use-timer";
import { useMemo } from "react";

export default function TimeTracker() {
  const {
    entries,
    currentDuration,
    isRunning,
    isPaused,
    startTimer,
    stopTimer,
    togglePause,
    resetTimer,
  } = useTimer();

  const handleStartTimer = () => {
    startTimer();
  };

  const totalDurationToday = useMemo(() => {
    const todayStr = new Date().toISOString().split("T")[0];
    return entries
      .filter(({ createdAt }) => createdAt === todayStr)
      .reduce((acc, res) => res.duration + acc, 0);
  }, [entries]);

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <TimerDisplay
          duration={currentDuration}
          totalToday={totalDurationToday}
        />
        <TimerControls
          isRunning={isRunning}
          isPaused={isPaused}
          onStart={handleStartTimer}
          onStop={stopTimer}
          onPause={togglePause}
          onReset={resetTimer}
        />
      </div>
    </div>
  );
}
