import axios from "axios";
// let token = localStorage.getItem('Token');

// const header = {
//         Authorization: "Bearer " + token,
//         "Content-Type": "application/json",
//   }
  
const registerManager = (data) => async (dispatch) => {
  dispatch({ type: "REG_MANAGER_REQ" });
  try {
    let queryResult = await axios.post(
      "http://34.210.129.167/api/register",
      data
    );
    console.log("queryresult", queryResult);
    if (queryResult.statusText === "Created") {
      console.log("message", queryResult.message);
      dispatch({
        type: "REG_MANAGER_SUCCESS",
        payload: queryResult.data.message,
      });
    }
  } catch (err) {
    console.log("error", err);
    dispatch({ type: "REG_MANAGER_FAILURE", payload: err });
  }
};


const registerRegularUser = (data) => async (dispatch) => {
  dispatch({ type: "REG_USER_REQ" });
  try {
      console.log("r user data",data);
      let token = localStorage.getItem('Token');
    let queryResult = await axios.post("http://34.210.129.167/api/users", data,{headers:{
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
}});
    console.log("queryresult", queryResult);
    if (queryResult.statusText === "Created") {
      console.log("message", queryResult.message);
      dispatch({ type: "REG_USER_SUCCESS", payload: queryResult.data.message });
    }
  } catch (err) {
    console.log("error", err);
    dispatch({ type: "REG_USER_FAILURE", payload: err });
  }
};
//update user action
const updateUser = (data) => async (dispatch) => {
  dispatch({ type: "UPDATE_USER_REQ" });
  try {
      console.log("r user data",data);
      let token = localStorage.getItem('Token');
    let queryResult = await axios.put(`http://34.210.129.167/api/users/${data.id}`, data,{headers:{
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
}});
    console.log("queryresult", queryResult);
    if (queryResult.status === 200) {
      console.log("message", queryResult.data.message);
      dispatch({ type: "UPDATE_USER_SUCCESS", payload: queryResult.message });
    }
  } catch (err) {
    console.log("error", err);
    dispatch({ type: "UPDATE_USER_FAILURE", payload: err });
  }
};
const emptySignUpMessage = () => {
  return {
    type: "SIGN_UP_MESSAGE",
  };
};
//....
const editMessageFalse = () =>{
  return{
    type: "EDIT_MESSAGE",
  }
}

const action ={
  registerManager,
  emptySignUpMessage,
  registerRegularUser,
  updateUser,
  editMessageFalse
};
export default action;

