import { initialState } from "../store/initialState";
const getUsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_USERS_REQ":
          return {
            ...state,
            loading: true,
            error: null,
            successMessage:false
          };
    
        case "GET_USERS_SUCCESS":
          return {
            ...state,
            loading: false,
            error: null,
            allUsers:action.payload,
            successMessage:true,
            editMessage:false
          };
    
        case "GET_USERS_FAILURE":
          return {
            ...state,
            error: action.payload,
          };
    
        // case "SUCCESS_MESSAGE":
        //   return {
        //     ...state,
        //     successMessage:false,
        //   };
       case "DELETE_USER":

         return{
           ...state,
         }
        default:
          return state;
      }
    };
    export default getUsersReducer;
    