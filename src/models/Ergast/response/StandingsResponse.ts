import { StandingsTable } from "../Standings/StandingsTable"

export interface StandingsResponse {
  MRData: {
    _attributes: {
      xmlns: string
      series: string
      url: string
      limit: string
      offset: string
      total: string
    }
    StandingsTable: StandingsTable
  }
}
