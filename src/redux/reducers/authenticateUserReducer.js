import { initialState } from "../store/initialState";
const authenticateUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_USER_REQ":
      return {
        ...state,
        loading: true,
        error: null,
        loginStatus: false,
      };
    case "LOGIN_USER_SUCCESS":
      return {
        ...state,
        user: action.payload,
        loading:false,
        loginStatus: true,
      };
      case "LOGIN_USER_FAILURE":
        return {
          ...state,
          error:action.payload
         
        };
    case "LOGOUT_USER":
      return {
        ...state,
        loginStatus: false,
      };

    default:
      return state;
  }
};
export default authenticateUserReducer;
