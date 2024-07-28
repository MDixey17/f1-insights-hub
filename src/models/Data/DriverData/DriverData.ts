import { CareerStats } from "./CareerStats"
import { Journey } from "./Journey"

export interface DriverData {
  fullName: string
  driverNumber: number
  homeCountry: string
  currentTeam: string
  careerStats: CareerStats
  journey: Journey[]
}
