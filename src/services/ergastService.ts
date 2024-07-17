import { ApiConfig } from "../config/apiConfig"
import { StandingsResponse } from "../models/Ergast/response/StandingsResponse"
import { ConstructorStandings } from "../models/Ergast/Standings/ConstructorStandings"
import { DriverStandings } from "../models/Ergast/Standings/DriverStandings"
import { axiosService } from "./axiosService"
import convert from "xml-js"

/**
 * Get the current Formula 1 standings in the Constructor's Championship
 * @returns A list containing current standings in the Constructor's Championship
 */
const getCurrentConstructorStandings = async (): Promise<
  ConstructorStandings[]
> => {
  const url = new URL(
    `${ApiConfig.Ergast.baseUrl}/current/constructorStandings`
  )

  const response = await axiosService.get(url.toString())
  const jsonResult = convert.xml2json(response.data, {
    compact: true,
    spaces: 2,
  })

  const parsedJson = JSON.parse(jsonResult) as StandingsResponse

  return parsedJson.MRData.StandingsTable.StandingsList.ConstructorStanding!
}

/**
 * Get the current Formula 1 standings in the Driver's Championship
 * @returns A list containing current standings in the Driver's Championship
 */
const getCurrentDriverStandings = async (): Promise<DriverStandings[]> => {
  const url = new URL(`${ApiConfig.Ergast.baseUrl}/current/driverStandings`)

  const response = await axiosService.get(url.toString())
  const jsonResult = convert.xml2json(response.data, {
    compact: true,
    spaces: 2,
  })

  const parsedJson = JSON.parse(jsonResult) as StandingsResponse

  return parsedJson.MRData.StandingsTable.StandingsList.DriverStanding!
}

export const ErgastService = {
  getCurrentConstructorStandings,
  getCurrentDriverStandings,
}
