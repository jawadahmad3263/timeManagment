import axios from "axios";

const loginUser = (data) => async (dispatch) => {
  dispatch({ type: "LOGIN_USER_REQ" });
  try {
    let queryResult = await axios.post("http://34.210.129.167/api/login", data);
    console.log("queryresult", queryResult);
    if (queryResult.status === 200) {
      localStorage.setItem("Token", queryResult.data.token);
      console.log(queryResult)
      console.log("haha", queryResult.data.user);
      dispatch({ type: "LOGIN_USER_SUCCESS", payload: queryResult.data.user });
    }
  } catch (err) {
    console.log("error", err);
    dispatch({ type: "LOGIN_USER_FAILURE", payload:err });
  }
};
const logoutUser = () => {
  return { type: "LOGOUT_USER" };
};

const action = {
  loginUser,
  logoutUser,
}

export default action;
