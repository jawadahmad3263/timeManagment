import React,{useState} from 'react'
import NavbarUi from '../ui/NavbarUi'
import {useHistory} from 'react-router-dom'
import { useSelector,useDispatch} from "react-redux";
import action from '../../../redux/actions/authenticateUserAction'
export default function Navbar() {
  const dispatch = useDispatch();
  const history = useHistory();
  const loginStatus = useSelector((state) => state.authenticateUserReducer.loginStatus);
    const [hamburgerBtn, setHamburgerBtn] = useState(false);
    const handleBurgerBtn = () => {
      if (hamburgerBtn === false) setHamburgerBtn(true);
      else setHamburgerBtn(false);
    };
    // const token = localStorage.getItem('Token')
   
    //function to logout user
    const handleLogout=()=>{
      dispatch(action.logoutUser())
      localStorage.clear('Token');
      history.push('/login')
    }
    return (
        <NavbarUi hamburgerBtn={hamburgerBtn} handleBurgerBtn={handleBurgerBtn} loginStatus={loginStatus} handleLogout={handleLogout}/>
    )
}
