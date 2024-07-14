export interface CarData {
  brake: number; // 0 = brake NOT pressed; 100 = brake pressed
  date: string; // UTC date and time in ISO 8601 format
  driver_numeber: number; // unique number assigned to an Formula 1 driver
  drs: number; // Drag Reduction System status
  meeting_key: number; // Unique identifier for the meeting
  n_gear: number; // Current gear ranging from 1 to 8. 0 = neutral or no gear
  rpm: number; // Revolutions per minute
  session_key: number; // Unique identifier for the session
  speed: number; // Velocity of the car in kilometers per hour
  throttle: number; // Percentage of max engine power being used
}
