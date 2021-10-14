import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/login/container/Login";
import PageNotFound from "./pages/pageNotFound/PageNotFound";
import SignUp from "./components/signup/container/SignUp";
import Navbar from "./components/navbar/container/Navbar";

import HomePage from "./pages/HomePage/container/HomePage";
import ProtectedRoute from "./ProtectedRoute";

function App() {
 
  return (
    <Router>
      <Navbar />

      <Switch>
       
        <ProtectedRoute exact path="/" component={HomePage} />:
        <Route exact path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </Router>
  );
}

export default App;
