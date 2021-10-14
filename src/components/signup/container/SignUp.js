import React, { useState } from "react";
import SignUpUi from "../ui/SignUpUi";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import action from "../../../redux/actions/crudUserAction";
export default function SignUp(props) {
  const { userType } = props;
  console.log("temp=", userType);
  const dispatch = useDispatch();
  const history = useHistory();
  const [signUpData, setSignUpData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    password_confirmation: "",
  });
  const signUpSuccess = useSelector(
    (state) => state.crudUserReducer.signUpMessage
  );
  console.log("signUpsuccess", signUpSuccess);
  //function to set signup data
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignUpData({
      ...signUpData,
      [name]: value,
    });
  };
  const handleSignUp = (event) => {
    event.preventDefault();
    if(userType===undefined)
    dispatch(action.registerManager(signUpData));
    else{
      signUpData.userType=userType;
      dispatch(action.registerRegularUser(signUpData));
    }
  };
  //back to login form after registration success
  if (signUpSuccess !== "")
    setTimeout(function () {
      dispatch(action.emptySignUpMessage());
      history.push("/login");
    }, 3000);
  // back to login form function
  const backToLogin = () => {
    history.push("/login");
  };
  return (
    <SignUpUi
      handleChange={handleChange}
      signUpData={signUpData}
      handleSignUp={handleSignUp}
      backToLogin={backToLogin}
      userType={userType}
      signUpSuccess={signUpSuccess}
    />
  );
}
