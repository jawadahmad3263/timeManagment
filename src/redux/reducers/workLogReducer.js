import { initialState } from "../store/initialState";
const workLogReducer = (state = initialState, action) => {
  switch (action.type) {
    //create work log cases....
    case "WORK_LOG_REQ":
      return {
        ...state,
        loading: true,
        error: null,
        successMessage: false,
      };

    case "WORK_LOG_SUCCESS":
      return {
        ...state,
        loading: false,
        error: null,
        successMessage: action.payload,
      };

    case "WORK_LOG_FAILURE":
      return {
        ...state,
        error: action.payload,
      };
//update work log
case "UPDATE_LOG_REQ":
  return {
    ...state,
    loading: true,
    error: null,
    updateLogMessage:""
  };

case "UPDATE_LOG_SUCCESS":
  return {
    ...state,
    loading: false,
    error: null,
    updateLogMessage:action.payload
  };

case "UPDATE_LOG_FAILURE":
  return {
    ...state,
    error: action.payload,
  };
//update working hour
case "UPDATE_WORKING_HOUR_REQ":
  return {
    ...state,
    loading: true,
    error: null,
  };

case "UPDATE_WORKING_HOUR_SUCCESS":
  return {
    ...state,
    loading: false,
    error: null,
  };

case "UPDATE_WORKING_HOUR_FAILURE":
  return {
    ...state,
    error: action.payload,
  };
    //get user work log cases...
    case "GET_LOG_REQ":
      return {
        ...state,
        loading: true,
        error: null,
        successMessage: false,
      };

    case "GET_LOG_SUCCESS":
      return {
        ...state,
        loading: false,
        error: null,
        updateLogMessage:false,
        userWorkLogs: action.payload,
      };

    case "GET_LOG_FAILURE":
      return {
        ...state,
        error: action.payload,
      };
    case "SUCCESS_MESSAGE":
      return {
        ...state,
        successMessage: false,
      };

    default:
      return state;
  }
};
export default workLogReducer;
