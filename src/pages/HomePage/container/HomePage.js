import React, { useState } from "react";
import { useSelector } from "react-redux";
import SignUp from "../../../components/signup/container/SignUp";
import HomePageUi from "../ui/HomePageUi";
import Styles from "../assets/css/HomePageUi.module.css";
import CreateLogs from "../../../components/createLogs/container/CreateLogs";
import AllUsers from '../../../components/allUsers/container/AllUsers';
import UserWorkLogs from "../../../components/userWorkLogs/container/UserWorkLogs";

export default function HomePage() {
  const [showItem, setShowItem] = useState("");
  const [userType, setUserType] = useState("user");

  //function to show specific tab component
  const handleOption = () => {
    var value = document.getElementById("select").value;
    setUserType(value);
  };
  //,,,,,
  const headingCss={
    color:"white",
    backgroundColor:"brown",
    padding:"20px"
  }

  const user = useSelector((state) => state.authenticateUserReducer.user);
  
  const tabComponent = () => {
    switch (showItem) {
      case "AddUser":
        return (
          <>
            <h2 style={headingCss}>Fill the form to add User</h2>
            <p className={Styles.addUserPara}>
              Select type of user want to register:
              <select id="select" onChange={handleOption}>
                <option value="user">User</option>
                <option value="manager">Manager</option>
              </select>
            </p>{" "}
            <SignUp userType={userType} />
          </>
        );
      case "createlogs":
        return <CreateLogs showItem={showItem}/>;
      case "AllLogs":
        return <UserWorkLogs id={user.id}/>;
      case "AllUser":
        return <AllUsers/>;

      default:
        return <h2 style={headingCss}>Time Management System</h2>;
    }
  };
  return (
    <HomePageUi
      setShowItem={setShowItem}
      tabComponent={tabComponent}
      user={user}
    />
  );
}
