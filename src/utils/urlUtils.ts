import {
  DRIVER_NUMBER,
  MEETING_KEY,
  SESSION_KEY,
} from "../constants/OpenF1/openf1Constants";
import { OpenF1Params } from "../models/OpenF1/requests/OpenF1Params";

/**
 * Add all search parameters to the provided URL.
 */
const addSearchParams = (
  url: URL,
  { isCurrentDriver, driverNumber, sessionId, meetingId }: OpenF1Params
) => {
  if (isCurrentDriver && !sessionId) {
    url.searchParams.append(SESSION_KEY, "latest");
  }

  if (sessionId) {
    url.searchParams.append(SESSION_KEY, sessionId);
  }

  if (driverNumber) {
    url.searchParams.append(DRIVER_NUMBER, driverNumber);
  }

  if (meetingId) {
    url.searchParams.append(MEETING_KEY, meetingId);
  }
};

export const URLUtils = {
  addSearchParams,
};
