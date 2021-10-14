import { combineReducers } from "redux";
import authenticateUserReducer from "./authenticateUserReducer";
import crudUserReducer from './crudUserReducer';
import workLogReducer from './workLogReducer';
import getUsersReducer from './getUsersReducer'

const rootReducer = combineReducers({
  authenticateUserReducer,
  crudUserReducer,
  workLogReducer,
  getUsersReducer
});

export default rootReducer;
