import { DriverCareer } from "../models/F1Insights/DriverResponse"
import { DriverStandingsDetail } from "../models/F1Insights/DriverStandingsResponse"

const driverStandingsToMap = (
  driverStandings: DriverStandingsDetail[]
): (string | number)[][] => {
  const data: (string | number)[][] = []

  const sortedStandings = driverStandings.sort((a, b) => {
    if (a.position < b.position) {
      return -1
    } else if (a.position > b.position) {
      return 1
    }
    return 0
  })

  for (let i = 0; i < sortedStandings.length; i++) {
    data.push([sortedStandings[i].driverName, sortedStandings[i].points])
  }

  return data
}

const sortCareerMap = (career: DriverCareer[]): DriverCareer[] => {
  return career.sort((a, b) => {
    const fixedEndYearA = a.endYear ?? 9999
    const fixedEndYearB = b.endYear ?? 9999
    if (fixedEndYearA < fixedEndYearB) {
      return -1
    } else if (fixedEndYearA > fixedEndYearB) {
      return 1
    } else if (a.startYear < b.startYear) {
      return -1
    } else if (a.startYear > b.startYear) {
      return 1
    }
    return 0
  })
}

export const DriverUtils = {
  driverStandingsToMap,
  sortCareerMap,
}
