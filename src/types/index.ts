export interface Entry {
  id: string;
  startTime: Date;
  endTime: Date | null;
  duration: number;
  lastPauseTime: Date | null;
  createdAt: string;
}
