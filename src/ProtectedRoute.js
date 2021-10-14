import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";

function ProtectedRoute({ component: Component, ...restOfProps }) {
    let token=localStorage.getItem('Token');
    //getting user from redux store just to get rid of error user bcoz after refreshing the browser user in store become empty 
    //if we have an api for to get a logged in single user data so we can maintain user even after refreshing
    const user = useSelector((state) => state.authenticateUserReducer.user);
  return (
    <Route
    {...restOfProps}
      render={(props) =>
        (token&&token.length!==  "")&&user.firstName!==undefined?<Component/> : <Redirect to="/login" />
      }
    />
  );
} 

export default ProtectedRoute;