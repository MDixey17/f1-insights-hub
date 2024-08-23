export interface ConstructorStandingsResponse {
  _id: string
  year: number
  constructors: ConstructorStandingsDetails[]
}

export interface ConstructorStandingsDetails {
  constructorId: string
  constructorName: string
  position: number
  points: number
}
