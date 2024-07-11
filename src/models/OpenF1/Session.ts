import { SessionName } from "./session/SessionName";
import { SessionType } from "./session/SessionType";

export interface Session {
  circuit_key: number;
  circuit_short_name: string;
  country_code: string;
  country_key: number;
  country_name: string;
  date_end: string;
  date_start: string;
  gmt_offset: string;
  location: string;
  meeting_key: number;
  session_key: number;
  session_name: SessionName;
  session_type: SessionType;
  year: number;
}
