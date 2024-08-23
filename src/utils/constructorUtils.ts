import { ConstructorStandingsDetails } from "../models/F1Insights/ConstructorStandingsResponse"

const constructorStandingsToMap = (
  standings: ConstructorStandingsDetails[]
): (string | number)[][] => {
  const data: (string | number)[][] = []

  const sortedStandings = standings.sort((a, b) => {
    if (a.position < b.position) {
      return -1
    } else if (a.position > b.position) {
      return 1
    }
    return 0
  })

  for (let i = 0; i < sortedStandings.length; i++) {
    data.push([sortedStandings[i].constructorName, sortedStandings[i].points])
  }

  return data
}

export const ConstructorUtils = {
  constructorStandingsToMap,
}
