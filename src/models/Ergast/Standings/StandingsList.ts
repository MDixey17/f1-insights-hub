import { ConstructorStandings } from "./ConstructorStandings"
import { DriverStandings } from "./DriverStandings"

export interface StandingsList {
  _attributes: {
    season: string
    round: string
  }
  DriverStanding?: DriverStandings[]
  ConstructorStanding?: ConstructorStandings[]
}
