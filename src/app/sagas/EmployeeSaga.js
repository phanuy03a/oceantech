import { GetListEmployee } from "app/views/AddNewEmployee/EmployeeServices";
import { call, put } from "redux-saga/effects";
import { ActionTypes } from "app/redux/actions/actionTypes";

export default function* getListEmployeeSaga() {
  const listEmployee = yield call(GetListEmployee);
  yield put({ type: ActionTypes.GET_LIST_EMPLOYEE_SUCCESS, payload: listEmployee.data });
}
