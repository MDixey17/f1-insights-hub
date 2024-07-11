import axios, { AxiosError } from "axios";

export const axiosService = axios;

axiosService.interceptors.response.use(undefined, (error: AxiosError) => {
  const { response } = error;

  switch (response?.status) {
    case 403:
      // Forbidden
      throw new Error("You are forbidden from accessing this data.");
    case 404:
      // Not found
      throw new Error("Resource not found.");
    default:
      // Unexpected
      throw new Error("An unexpected error has occurred.");
  }
});
