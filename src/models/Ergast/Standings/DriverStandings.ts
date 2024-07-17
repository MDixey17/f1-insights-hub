import { Constructor } from "./Constructor"
import { Driver } from "./Driver"

export interface DriverStandings {
  _attributes: {
    position: string
    positionText: string
    points: string
    wins: string
  }
  Driver: Driver
  Constructor: Constructor
}
