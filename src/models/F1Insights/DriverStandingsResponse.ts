export interface DriverStandingsResponse {
  _id: string
  year: number
  drivers: DriverStandingsDetail[]
}

export interface DriverStandingsDetail {
  driverId: string
  driverName: string
  position: number
  points: number
}
