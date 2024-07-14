import { Gap } from "./Gap";

export interface Interval {
  date: string;
  driver_number: number;
  gap_to_leader: Gap;
  interval: Gap;
  meeting_key: number;
  session_key: number;
}
