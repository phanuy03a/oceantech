import { takeLatest } from "redux-saga/effects";
import { ActionTypes } from "app/redux/actions/actionTypes";
import getListEmployeeSaga from "./EmployeeSaga";
import getListLocationSaga from "./LocationSaga";
import getOtherFeatureSaga from "./OtherFeatureSaga";
export default function* rootSaga() {
  yield takeLatest(ActionTypes.GET_LIST_EMPLOYEE_REQUEST, getListEmployeeSaga);
  yield takeLatest(ActionTypes.GET_LIST_EMPLOYEE_REQUEST, getListEmployeeSaga);
  yield takeLatest(ActionTypes.GET_LIST_LOCATION, getListLocationSaga);
  yield takeLatest(ActionTypes.GET_OTHER_FEATURE, getOtherFeatureSaga);
}
