import React from "react";
import { Link } from "react-router-dom";
import Styles from "../assets/css/Login.module.css";
import { useSelector} from "react-redux";
export default function LoginUi(props) {
  const { handleChange, handleLogin, credintial, pushToRegister } = props;
  const loading = useSelector(
    (state) => state.authenticateUserReducer.loading
  );
  
  return (
    <div className="container">
      <div className={Styles.loginWrapper}>
       {loading===false?<>
        <div className={Styles.imageWrapper}></div>
        <div className={Styles.loginFormWrapper}>
          <div className={Styles.form}>
            <h2>ACCOUNT LOGIN</h2>
            <input
              type="email"
              name="email"
              placeholder={"Enter Email"}
              value={credintial.email}
              onChange={handleChange}
              
            />
            <input
              type="password"
              name="password"
              placeholder={"Password"}
              value={credintial.password}
              onChange={handleChange}
             
            />
            <button type="submit" onClick={handleLogin}>
              Login
            </button>
            <p>
              Don't have an account
              <span>
                <Link onClick={pushToRegister} to="">
                
                  Register now
                </Link>
              </span>
            </p>
          </div>
        </div></>:<h2>Loading..</h2>}
      </div>
    </div>
  );
}
