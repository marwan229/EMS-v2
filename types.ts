
export type LogType = 'info' | 'warning' | 'error' | 'maintenance';

export interface LogEntry {
  time: string;
  message: string;
  type: LogType;
}
