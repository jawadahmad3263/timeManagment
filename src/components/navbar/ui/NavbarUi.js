import React from "react";
import { Link } from "react-router-dom";
import Styles from '../assets/css/NavbarUi.module.css';
import {AiFillClockCircle} from "react-icons/ai";
import {FaUserAlt} from 'react-icons/fa'
export default function NavbarUi(props) {
    const {hamburgerBtn, handleBurgerBtn, loginStatus, handleLogout} = props;
    return (
        <div className={Styles.section_Navbar}>
      <div className="container">
        <div className={Styles.navbarWrapper}>
        <div className={Styles.logo}>
        <AiFillClockCircle className={Styles.clock}/><p>TMS</p>
          </div>
          <div className={Styles.nav}>
            <nav>
                <ul className={Styles.listStyle}>
                    <li>
                    <Link to="/">Home</Link>
                    </li>
                </ul>
            </nav>
          </div>
          <div className={Styles.btns}>
                <ul>
                  {loginStatus!==true?
                    <><li>
                        <Link to="/signup">Sign Up</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    </>:<li>
                        <button className={Styles.logoutBtn} onClick={handleLogout}><FaUserAlt className={Styles.logoutIcon}/>Logout</button>
                    </li>}
                </ul>
          </div>
           
              
              
              <button
                className={
                  hamburgerBtn === false
                    ? Styles.hmbrgrBtn
                    : Styles.hmbrgrBtnClose
                }
                onClick={handleBurgerBtn}
              >
                <span className={Styles.topbar}></span>
                <span className={Styles.midbar}></span>
                <span className={Styles.bottombar}></span>
              </button>
              {/* hamburger menu */}
              {hamburgerBtn === true ? (
                <div className={Styles.hamburgerMenu}>
                  <ul className={Styles.hamBurgerlist}>
                    <li>
                      <Link onClick={handleBurgerBtn} to="/">Home</Link>
                    </li>
                    {loginStatus!==true?
                    <>
                    <li>
                      <Link onClick={handleBurgerBtn} to="/signup">Sign Up</Link>
                    </li>
                    <li>
                      <Link onClick={handleBurgerBtn} to="/login">Login</Link>
                    </li>
                    </>:
                    <li>
                      <button className={Styles.logoutBtn} onClick={handleLogout}><FaUserAlt className={Styles.logoutIcon}/>Logout</button>
                    </li>
                     }
                  </ul>
                </div>
              ) : (
                <></>
              )}
      
        </div>
      </div>
    </div>
    )
}
