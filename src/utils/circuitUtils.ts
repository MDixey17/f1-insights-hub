import { F1_CIRCUIT_DATA } from "../data/Circuits"

/**
 * Get the country name of a circuit when provided its city or country.
 * @param circuitCity The city or country the circuit is located in.
 * @returns A string representing the country name of the circuit.
 */
const getCircuitCountryName = (circuitCity: string): string => {
  if (circuitCity === "Miami") {
    return "United States"
  }
  return circuitCity
}

/**
 * Get recent data for the circuit, including the current season's results, past winners, and fastest lap.
 * @param circuit The city, country, or the name of the circuit.
 * @returns An object containing all relevant data for the provided circuit.
 */
const getCircuitData = (circuit: string) => {
  const filtered = F1_CIRCUIT_DATA.filter(
    (circuitData) => circuitData.trackName === circuit
  )
  if (filtered.length > 0) {
    return filtered[0]
  }
  return undefined
}

/**
 * Get the most recent podium for a circuit.
 * @param circuit The name of the circuit.
 * @returns A string array representing the podium.
 */
const getCircuitPodium = (circuit: string) => {
  const filtered = F1_CIRCUIT_DATA.filter(
    (circuitData) => circuitData.trackName === circuit
  )
  if (filtered.length > 0) {
    return filtered[0].raceResults
  }
  return undefined
}

export const CircuitUtils = {
  getCircuitCountryName,
  getCircuitData,
  getCircuitPodium,
}
