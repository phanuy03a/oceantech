const API_PATH = "http://localhost:3000/api/";
const API_PATH_LOCATION = "http://localhost:3000/api/location";
const API_PATH_OTHER_FEATURE = "http://localhost:3000/api/otherFeature";

import axios from "axios";
export const GetListEmployee = () => {
  var url = API_PATH + "listAddNewEmployee";
  return axios.get(url);
};
export const GetListLocation = () => {
  return axios.get(API_PATH_LOCATION);
};
export const getOtherFeature = () => {
  return axios.get(API_PATH_OTHER_FEATURE);
};
