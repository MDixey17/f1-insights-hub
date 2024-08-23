import { ApiConfig } from "../config/apiConfig"
import { CircuitResponse } from "../models/F1Insights/CircuitResponse"
import { ConstructorResponse } from "../models/F1Insights/ConstructorResponse"
import { ConstructorStandingsResponse } from "../models/F1Insights/ConstructorStandingsResponse"
import { DriverResponse } from "../models/F1Insights/DriverResponse"
import { DriverStandingsResponse } from "../models/F1Insights/DriverStandingsResponse"
import { axiosService } from "./axiosService"

const getCircuits = async (): Promise<CircuitResponse[]> => {
  const url = new URL(`${ApiConfig.F1Insights.baseUrl}/circuits`)

  const response = await axiosService.get<CircuitResponse[]>(url.toString())

  return response.data
}

const getCircuitById = async (id: string): Promise<CircuitResponse> => {
  const url = new URL(`${ApiConfig.F1Insights.baseUrl}/circuits/id/${id}`)

  const response = await axiosService.get<CircuitResponse>(url.toString())

  return response.data
}

const getLastRace = async (): Promise<CircuitResponse> => {
  const url = new URL(`${ApiConfig.F1Insights.baseUrl}/circuits/lastrace`)

  const response = await axiosService.get<CircuitResponse>(url.toString())

  return response.data
}

const getCircuitByLocation = async (
  location: string
): Promise<CircuitResponse> => {
  const url = new URL(
    `${ApiConfig.F1Insights.baseUrl}/circuits/location/${location}`
  )

  const response = await axiosService.get<CircuitResponse>(url.toString())

  return response.data
}

const getConstructors = async (): Promise<ConstructorResponse[]> => {
  const url = new URL(`${ApiConfig.F1Insights.baseUrl}/constructor`)

  const response = await axiosService.get<ConstructorResponse[]>(url.toString())

  return response.data
}

const getConstructorById = async (id: string): Promise<ConstructorResponse> => {
  const url = new URL(`${ApiConfig.F1Insights.baseUrl}/constructor/id/${id}`)

  const response = await axiosService.get<ConstructorResponse>(url.toString())

  return response.data
}

const getConstructorByName = async (
  name: string
): Promise<ConstructorResponse> => {
  const url = new URL(`${ApiConfig.F1Insights.baseUrl}/constructor/${name}`)

  const response = await axiosService.get<ConstructorResponse>(url.toString())

  return response.data
}

const getCurrentConstructorStandings =
  async (): Promise<ConstructorStandingsResponse> => {
    const url = new URL(
      `${ApiConfig.F1Insights.baseUrl}/standings/constructor/current`
    )

    const response = await axiosService.get<ConstructorStandingsResponse>(
      url.toString()
    )

    return response.data
  }

const getCurrentDriverStandings =
  async (): Promise<DriverStandingsResponse> => {
    const url = new URL(
      `${ApiConfig.F1Insights.baseUrl}/standings/driver/current`
    )

    const response = await axiosService.get<DriverStandingsResponse>(
      url.toString()
    )

    return response.data
  }

const getCurrentDrivers = async (): Promise<DriverResponse[]> => {
  const url = new URL(`${ApiConfig.F1Insights.baseUrl}/driver/current`)

  const response = await axiosService.get<DriverResponse[]>(url.toString())

  return response.data
}

const getDriverByName = async (
  displayName?: string,
  firstName?: string,
  lastName?: string
): Promise<DriverResponse> => {
  const url = new URL(`${ApiConfig.F1Insights.baseUrl}/driver/search`)

  if (displayName) {
    url.searchParams.append("displayName", displayName)
  }

  if (firstName) {
    url.searchParams.append("firstName", firstName)
  }

  if (lastName) {
    url.searchParams.append("lastName", lastName)
  }

  const response = await axiosService.get<DriverResponse>(url.toString())

  return response.data
}

const getDriverById = async (id: string): Promise<DriverResponse> => {
  const url = new URL(`${ApiConfig.F1Insights.baseUrl}/driver/id/${id}`)

  const response = await axiosService.get<DriverResponse>(url.toString())

  return response.data
}

export const F1InsightsService = {
  getCircuits,
  getCircuitById,
  getConstructorById,
  getConstructorByName,
  getConstructors,
  getCurrentConstructorStandings,
  getCurrentDriverStandings,
  getCurrentDrivers,
  getDriverByName,
  getLastRace,
  getCircuitByLocation,
  getDriverById,
}
