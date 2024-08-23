export interface DriverResponse {
  _id: string
  firstName: string
  lastName: string
  displayName: string
  homeCountry: string
  driverNumber: number
  imageUrl: string
  constructorId: string
  races: number
  wins: number
  podiums: number
  fastestLaps: number
  championships: number
  active: boolean
  career: DriverCareer[]
}

export interface DriverCareer {
  constructorId: string
  constructorName: string
  startYear: number
  endYear: number | null
}
