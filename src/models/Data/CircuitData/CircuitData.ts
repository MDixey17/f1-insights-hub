import { RecentWinner } from "./RecentWinner"
import { WRLap } from "./WRLap"

export interface CircuitData {
  trackName: string
  grandPrixName: string
  firstGrandPrix: string
  numberOfLaps: number
  circuitLength: number
  raceDistance: number
  fastestLap: WRLap
  recentWinners: RecentWinner[]
  raceResults: string[] // 1st, 2nd, 3rd at indexes 0, 1, 2
}
