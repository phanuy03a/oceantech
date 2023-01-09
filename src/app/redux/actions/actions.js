import { ActionTypes } from "./actionTypes";
export const getListEmployeeRequest = () => {
  return { type: ActionTypes.GET_LIST_EMPLOYEE_REQUEST };
};

export const getListLocation = () => {
  return { type: ActionTypes.GET_LIST_LOCATION };
};
export const getOtherFeature = () => {
  return { type: ActionTypes.GET_OTHER_FEATURE };
};
