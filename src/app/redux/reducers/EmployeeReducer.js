import { ActionTypes } from "../actions/actionTypes";

const initialState = { listEmployee: [] };

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_LIST_EMPLOYEE_REQUEST: {
      return { ...state };
    }
    case ActionTypes.GET_LIST_EMPLOYEE_SUCCESS: {
      return { ...state, listEmployee: action.payload };
    }

    default:
      return state;
  }
};
