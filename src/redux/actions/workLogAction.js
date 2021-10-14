import axios from "axios";

const createWorkLog = (data) => async (dispatch) => {
  dispatch({ type: "CREATE_LOG_REQ" });
  try {
    let token = localStorage.getItem('Token');
    let queryResult = await axios.post(
      "http://34.210.129.167/api/work-logs",
      data,
      {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      }
    );
    console.log("queryresult", queryResult);
    if (queryResult.success === true) {
      console.log(queryResult);
      dispatch({
        type: "CREATE_LOG_SUCCESS",
        payload: queryResult.data.success,
      });
    }
  } catch (err) {
    console.log("error", err);
    dispatch({ type: "CREATE_LOG_FAILURE", err });
  }
};
//update work log action
const updateWorkLog = (data) => async (dispatch) => {
  dispatch({ type: "UPDATE_LOG_REQ" });
  try {
    let token = localStorage.getItem('Token');
   
    let queryResult = await axios.put(
      `http://34.210.129.167/api/work-logs/${data.id}`,
      data,
      {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      }
    );
    console.log("queryresult", queryResult);
    if (queryResult.success === true) {
      console.log("here success",queryResult.data.success);
      dispatch({
        type: "UPDATE_LOG_SUCCESS",
        payload: queryResult.data.success,
      });
    }
  } catch (err) {
    console.log("error", err);
    dispatch({ type: "UPDATE_LOG_FAILURE", err });
  }
};
//update working hour
const updateWorkingHour = (workHour,userId) => async (dispatch) => {
  dispatch({ type: "UPDATE_WORKING_HOUR_REQ" });
  try {
    let token = localStorage.getItem('Token');
   
    let queryResult = await axios.put(
      `http://34.210.129.167/api/users/${userId}/preferred-working-hours`,
      workHour,
      {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      }
    );
    console.log("queryresult", queryResult);
    if (queryResult.success === true) {
      console.log("here success",queryResult.data.success);
      dispatch({
        type: "UPDATE_WORKING_HOUR_SUCCESS",
        payload: queryResult.data.success,
      });
    }
  } catch (err) {
    console.log("error", err);
    dispatch({ type: "UPDATE_WORKING_HOUR_FAILURE", err });
  }
};
//single user work logs action
const getWorkLog = (id) => async (dispatch) => {
  let token = localStorage.getItem('Token');
  dispatch({ type: "GET_LOG_REQ" });
  try {
    let queryResult = await axios.get(
      `http://34.210.129.167/api/user/${id}/work-logs`,
      {
        headers: {
          Authorization: "Bearer " +token,
          "Content-Type": "application/json",
        },
      }
    );
    console.log("queryresult", queryResult);
    if (queryResult.status === 200) {
      console.log(queryResult);
      dispatch({ type: "GET_LOG_SUCCESS", payload: queryResult.data.workLogs });
    }
  } catch (err) {
    console.log("error", err);
    dispatch({ type: "GET_LOG_FAILURE", err });
  }
};

const action= {
  createWorkLog,
  getWorkLog,
  updateWorkLog,
  updateWorkingHour
};
export default action;
