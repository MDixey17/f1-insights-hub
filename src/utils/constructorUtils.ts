import { ConstructorStandings } from "../models/Ergast/Standings/ConstructorStandings"

const constructorStandingsToMap = (
  standings: ConstructorStandings[]
): (string | number)[][] => {
  const data: (string | number)[][] = []

  for (let i = 0; i < standings.length; i++) {
    data.push([
      standings[i].Constructor.Name._text,
      standings[i]._attributes.points,
    ])
  }

  return data
}

export const ConstructorUtils = {
  constructorStandingsToMap,
}
