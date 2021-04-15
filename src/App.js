import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,

  Route, Switch
} from "react-router-dom";
import AddAdmin from "./Components/DashBoardComponents/AddAdmin/AddAdmin";
import AddServices from "./Components/DashBoardComponents/AddServices/AddServices";
import DashBoard from "./Components/DashBoardComponents/DashBoard/DashBoard";
import Home from "./Components/HomeComponents/Home/Home";
//import PrivateRoute from './Components/LoginComponents//PrivateRoute/PrivateRoute';
import Login from "./Components/LoginComponents/Login/Login";
import NotFound from "./Components/NotFound/NotFound";

export const UserContext = createContext ();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})

  return (
    <UserContext.Provider value={ [loggedInUser, setLoggedInUser] }>
        <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/dashboard">
            <DashBoard />
          </Route>
          <Route path="/dashboard/addServices">
            <AddServices />
          </Route>
          <Route path="/dashboard/addAdmin">
            <AddAdmin />
          </Route>
          <Route exact path="/">
          <Home />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
    
   
  );
}

export default App;
