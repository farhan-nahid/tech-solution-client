import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,

  Route, Switch
} from "react-router-dom";
import AddAdmin from "./Components/DashBoardComponents/AddAdmin/AddAdmin";
import AddServices from "./Components/DashBoardComponents/AddServices/AddServices";
import AllOrders from "./Components/DashBoardComponents/AllOrders/AllOrders";
import DashBoard from "./Components/DashBoardComponents/DashBoard/DashBoard";
import ManageServices from "./Components/DashBoardComponents/ManageServices/ManageServices";
import Order from "./Components/DashBoardComponents/Order/Order";
import Review from "./Components/DashBoardComponents/Review/Review";
import UserShowOrder from "./Components/DashBoardComponents/UserShowOrder/UserShowOrder";
import Home from "./Components/HomeComponents/Home/Home";
import PrivateRoute from './Components/LoginComponents//PrivateRoute/PrivateRoute';
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
          <PrivateRoute exact path="/dashboard">
            <DashBoard />
          </PrivateRoute>
          <PrivateRoute path="/dashboard/addServices">
            <AddServices />
          </PrivateRoute>
          <PrivateRoute path="/dashboard/addAdmin">
            <AddAdmin />
          </PrivateRoute>
          <PrivateRoute path="/dashboard/order/:id">
            <Order />
          </PrivateRoute>
          <PrivateRoute path="/dashboard/allOrders">
            <AllOrders />
          </PrivateRoute>
          <PrivateRoute path="/dashboard/userOrder">
            <UserShowOrder />
          </PrivateRoute>
          <PrivateRoute path="/dashboard/review">
            <Review />
          </PrivateRoute>
          <PrivateRoute path="/dashboard/manageServices">
            <ManageServices />
          </PrivateRoute>
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
