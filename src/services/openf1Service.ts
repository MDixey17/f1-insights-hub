import { ApiConfig } from "../config/apiConfig";
import { OpenF1Params } from "../models/OpenF1/requests/OpenF1Params";
import { CarDataResponse } from "../models/OpenF1/responses/CarDataResponse";
import { DriverResponse } from "../models/OpenF1/responses/DriverResponse";
import { IntervalResponse } from "../models/OpenF1/responses/IntervalResponse";
import { MeetingResponse } from "../models/OpenF1/responses/MeetingsResponse";
import { PitResponse } from "../models/OpenF1/responses/PitResponse";
import { StintResponse } from "../models/OpenF1/responses/StintsResponse";
import { URLUtils } from "../utils/urlUtils";
import { axiosService } from "./axiosService";

/**
 * Get a list of F1 Drivers that match the provided criteria.
 * @returns A list of Drivers that match the provided criteria.
 */
const getDrivers = async ({
  isCurrentDriver,
  driverNumber,
}: OpenF1Params): Promise<DriverResponse> => {
  const url = new URL(`${ApiConfig.OpenF1.baseUrl}/drivers`);

  URLUtils.addSearchParams(url, { driverNumber, isCurrentDriver });

  const response = await axiosService.get<DriverResponse>(url.toString());

  return response.data;
};

/**
 * Get the stints using the provided parameters.
 * @returns A list of stint data that match the provided parameters.
 */
const getStints = async ({
  driverNumber,
  sessionId,
}: OpenF1Params): Promise<StintResponse> => {
  const url = new URL(`${ApiConfig.OpenF1.baseUrl}/stints`);

  URLUtils.addSearchParams(url, { driverNumber, sessionId });

  const response = await axiosService.get<StintResponse>(url.toString());

  return response.data;
};

const getPitStops = async ({
  driverNumber,
  sessionId,
}: OpenF1Params): Promise<PitResponse> => {
  const url = new URL(`${ApiConfig.OpenF1.baseUrl}/pit`);

  URLUtils.addSearchParams(url, { driverNumber, sessionId });

  const response = await axiosService.get<PitResponse>(url.toString());

  return response.data;
};

/**
 * Get the meeting which can refer to a Grand Prix or testing weekend, commonly including multiple sessions.
 * @returns A list of meetings that meet the provided criteria.
 */
const getMeeting = async ({
  meetingId,
}: OpenF1Params): Promise<MeetingResponse> => {
  const url = new URL(`${ApiConfig.OpenF1.baseUrl}/meetings`);

  URLUtils.addSearchParams(url, { meetingId });

  const response = await axiosService.get<MeetingResponse>(url.toString());

  return response.data;
};

/**
 * Get the race intervals for the provided parameters.
 * @returns A list of interval data for the provided parameters.
 */
const getIntervals = async ({
  sessionId,
  driverNumber,
}: OpenF1Params): Promise<IntervalResponse> => {
  const url = new URL(`${ApiConfig.OpenF1.baseUrl}/intervals`);

  URLUtils.addSearchParams(url, { sessionId, driverNumber });

  const response = await axiosService.get<IntervalResponse>(url.toString());

  return response.data;
};

/**
 * Get the car data for the specified parameters. The sample rate, per the API documentation, is 3.7 Hz.
 * @returns A list of car data for the provided parameters.
 */
const getCarData = async ({
  sessionId,
  driverNumber,
}: OpenF1Params): Promise<CarDataResponse> => {
  const url = new URL(`${ApiConfig.OpenF1.baseUrl}/car_data`);

  URLUtils.addSearchParams(url, { sessionId, driverNumber });

  const response = await axiosService.get<CarDataResponse>(url.toString());

  return response.data;
};

export const OpenF1Service = {
  getDrivers,
  getStints,
  getPitStops,
  getMeeting,
  getIntervals,
  getCarData,
};
