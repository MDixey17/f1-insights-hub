import { Category } from "./Category";
import { Flag } from "./Flag";
import { Scope } from "./Scope";

export interface RaceControl {
  category: Category;
  date: string;
  driver_number: number;
  flag: Flag;
  lap_number: number;
  meeting_key: number;
  message: string;
  scope: Scope;
  sector: number | null;
  session_key: number;
}
