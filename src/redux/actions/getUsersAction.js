import axios from "axios";

const getAllUsers = (pageNumber) => async (dispatch) => {
  dispatch({ type: "GET_USERS_REQ" });
  try {
    let token = localStorage.getItem("Token");
    let queryResult = await axios.get(
      `http://34.210.129.167/api/users?page=${pageNumber}`,
      {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      }
    );
    console.log("queryresult", queryResult);
    if (queryResult.status === 200) {
      console.log(queryResult.data.users);
      dispatch({ type: "GET_USERS_SUCCESS", payload: queryResult.data.users });
    }
  } catch (err) {
    console.log("error", err);
    dispatch({ type: "GET_USERS_FAILURE", err });
  }
};
const deleteUser = (id) => {
  let token = localStorage.getItem("Token");
  axios.delete(`http://34.210.129.167/api/users/${id}`, {
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
  });
  return {
    type: "DELETE_USER",
  };
};


const action={
  getAllUsers,
  deleteUser,
};
export default action;
