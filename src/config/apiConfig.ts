import { Service } from "../models/API/Service";

const Ergast: Service = {
  baseUrl: "http://ergast.com/api/f1",
};

const OpenF1: Service = {
  baseUrl: "https://api.openf1.org/v1",
};

export const ApiConfig = {
  Ergast,
  OpenF1,
};
