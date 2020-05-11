import { configAPI } from "config";

export const environment = {
  production: true,
  apiURL: configAPI.apiUrl_p,
  apiURL_h: configAPI.apiUrl_p
};
