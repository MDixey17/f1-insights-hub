import { PreviousResults } from "../models/F1Insights/CircuitResponse"

interface PreviousWinners {
  driverName: string
  year: number
}

const getPreviousWinners = (
  previousResults: PreviousResults[]
): PreviousWinners[] => {
  const previousWinners: PreviousWinners[] = []

  for (let i = 0; i < previousResults.length; i++) {
    const data = previousResults[i]
    const winner = data.driverResults.find((driver) => driver.position === 1)!
    previousWinners.push({ driverName: winner.driverName, year: data.year })
  }

  return previousWinners
}

export const CircuitUtils = {
  getPreviousWinners,
}
