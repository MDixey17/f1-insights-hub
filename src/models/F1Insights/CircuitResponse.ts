export interface CircuitResponse {
  _id: string
  country: string
  name: string
  grandPrixName: string
  numberOfLaps: number
  length: number
  raceDistance: number
  previousResults: PreviousResults[]
  lastModifiedDate: Date
  worldRecord: WorldRecord
  location: string
}

export interface PreviousResults {
  year: number
  driverResults: DriverResult[]
}

export interface DriverResult {
  driverName: string
  position: number
}

export interface WorldRecord {
  driverName: string
  time: string
  year: number
}
