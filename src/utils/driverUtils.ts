import { DriverStandings } from "../models/Ergast/Standings/DriverStandings"

const getDriverFullName = (givenName: string, familyName: string): string =>
  `${givenName} ${familyName}`

const driverStandingsToMap = (
  driverStandings: DriverStandings[]
): (string | number)[][] => {
  const data: (string | number)[][] = []

  for (let i = 0; i < driverStandings.length; i++) {
    data.push([
      getDriverFullName(
        driverStandings[i].Driver.GivenName._text,
        driverStandings[i].Driver.FamilyName._text
      ),
      driverStandings[i]._attributes.points,
    ])
  }

  return data
}

export const DriverUtils = {
  getDriverFullName,
  driverStandingsToMap,
}
