import { PreviousResults } from "../models/F1Insights/CircuitResponse"

interface PreviousWinners {
  driverName: string
  year: number
}

const getPreviousWinners = (
  previousResults: PreviousResults[]
): PreviousWinners[] => {
  const previousWinners: PreviousWinners[] = []

  const sorted = previousResults.sort((a, b) => {
    if (a.year > b.year) {
      return -1
    } else if (a.year < b.year) {
      return 1
    }
    return 0
  })

  for (let i = 0; i < sorted.length; i++) {
    const data = sorted[i]
    const winner = data.driverResults.find((driver) => driver.position === 1)!
    previousWinners.push({ driverName: winner.driverName, year: data.year })
  }

  return previousWinners
}

export const CircuitUtils = {
  getPreviousWinners,
}
