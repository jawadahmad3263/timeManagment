import React, { useState } from "react";
import LoginUi from "../ui/LoginUi";
import { useHistory } from "react-router-dom";
// import SignUp from "../../signup/container/SignUp";
import action from "../../../redux/actions/authenticateUserAction";
import { useSelector, useDispatch } from "react-redux";

export default function Login() {
  const [credintial, setCredintial] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const history = useHistory();
  const loginStatus = useSelector(
    (state) => state.authenticateUserReducer.loginStatus
  );
 

  if (loginStatus === true) history.push("/");
  //function to set credintial
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredintial({
      ...credintial,
      [name]: value,
    });
  };

  //function to login user
  const handleLogin = () => {
    dispatch(action.loginUser(credintial));
  };
  // function to shift to signin form
  const pushToRegister = (event) => {
    event.preventDefault();
    history.push("/signup");
  };
  return (
    <LoginUi
      handleChange={handleChange}
      handleLogin={handleLogin}
      credintial={credintial}
      pushToRegister={pushToRegister}
    />
  );
}
