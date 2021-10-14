import React from "react";
import Styles from "../assets/css/HomePageUi.module.css";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
export default function HomePageUi(props) {
  const { setShowItem, tabComponent, user } = props;
  return (
    <div className={"container"}>
      <div className={Styles.homePage}>
        <div className={Styles.sideBar}>
          <div className={Styles.userInfo}>
            <CgProfile className={Styles.avatar} />
            <p>
              {user.firstName} {user.lastName}
            </p>
            <p>Role: {user.roles[0].name}</p>
          </div>

          <ul className={Styles.barMenu}>
            {user.roles[0].name === "user" ? (
              <>
                <Link onClick={() => setShowItem("createlogs")} to="">
                  <li>Create logs</li>
                </Link>
                <Link onClick={() => setShowItem("AllLogs")} to="">
                  <li>All logs Record</li>
                </Link>
              </>
            ) : (
              <>
                <Link onClick={() => setShowItem("AddUser")} to="">
                  <li>Add User</li>
                </Link>
                <Link onClick={() => setShowItem("AllUser")} to="">
                  { user.roles[0].name === "admin" ?
                  <li>Users and Logs</li>:
                  <li>All Users</li>
                  }
                  {/* <li>Users and Logs</li> */}
                </Link>
              </>
            )}
          </ul>
        </div>
        <div className={Styles.itemWrapper}>
          <div>{tabComponent()}</div>
        </div>
      </div>
    </div>
  );
}
