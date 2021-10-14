import { initialState } from "../store/initialState";
const registerUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REG_MANAGER_REQ":
      return {
        ...state,
        loading: true,
        error: null,
      };

    case "REG_MANAGER_SUCCESS":
      return {
        ...state,
        loading: false,
        error: null,
        signUpMessage: action.payload,
      };

    case "REG_MANAGER_FAILURE":
      return {
        ...state,
        error: action.payload,
      };

    //regular users cases
    case "REG_USER_REQ":
      return {
        ...state,
        loading: true,
        error: null,
      };

    case "REG_USER_SUCCESS":
      return {
        ...state,
        loading: false,
        error: null,
        signUpMessage: action.payload,
      };

    case "REG_USER_FAILURE":
      return {
        ...state,
        error: action.payload,
      };
   //Update user cases
    case "UPDATE_USER_REQ":
      return {
        ...state,
        loading: true,
        error: null,
      };

    case "UPDATE_USER_SUCCESS":
      return {
        ...state,
        loading: false,
        error: null,
        editMessage:true,
      };
    case "EDIT_MESSAGE":
      return {
        ...state,
        editMessage:false
      }  

    case "UPDATE_USER_FAILURE":
      return {
        ...state,
        error: action.payload,
      };
      
    case "SIGN_UP_MESSAGE":
      return {
        ...state,
        signUpMessage: "",
      };

    default:
      return state;
  }
};
export default registerUserReducer;
