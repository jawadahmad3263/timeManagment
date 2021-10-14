import React from "react";
import Styles from "../assets/css/SignUpUi.module.css";
import { AiOutlineRollback } from "react-icons/ai";
export default function SignUpUi(props) {
  const {
    handleChange,
    signUpData,
    handleSignUp,
    backToLogin,
    userType,
    signUpSuccess,
  } = props;
  return (
    <>{ signUpSuccess===""?
    <div
      className={
        userType === "user" || userType === "manager"
          ? Styles.createUserForm
          : `container ${Styles.formWrapper}`
      }
    >
      <div>
        <button className={Styles.backBtn} onClick={backToLogin}>
          <AiOutlineRollback />
        </button>
      </div>
      <div className={Styles.form}>
        <h2>Fill the form to register now</h2>
        <input
          type="text"
          name="firstName"
          placeholder={"Enter first name"}
          value={signUpData.firstName}
          onChange={handleChange}
          autoComplete="off"
        />
        <input
          type="text"
          name="lastName"
          placeholder={"Enter last name"}
          value={signUpData.lastName}
          onChange={handleChange}
          autoComplete="off"
        />
        <input
          type="email"
          name="email"
          placeholder={"Enter Email"}
          value={signUpData.email}
          onChange={handleChange}
          autoComplete="off"
        />
        <input
          type="password"
          name="password"
          placeholder={"Password"}
          value={signUpData.password}
          onChange={handleChange}
          autoComplete="off"
        />
        <input
          type="password"
          name="password_confirmation"
          placeholder={"Confirm password"}
          value={signUpData.password_confirmation}
          onChange={handleChange}
          autoComplete="off"
        />
        <button type="submit" onClick={handleSignUp}>
          Register
        </button>
      </div>
    
    </div>:<div className={Styles.successMessage}><h4>{signUpSuccess}</h4></div>}</>
  );
}
