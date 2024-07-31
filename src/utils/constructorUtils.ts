import { F1_TEAM_DATA } from "../data/Teams"
import { TeamData } from "../models/Data/TeamData/TeamData"
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

const getConstructorData = (name: string): TeamData | undefined => {
  const team = F1_TEAM_DATA.filter((team) => team.displayName === name)
  if (team.length > 0) {
    return team[0]
  }
  return undefined
}

export const ConstructorUtils = {
  constructorStandingsToMap,
  getConstructorData,
}
