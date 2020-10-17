import React, { Component } from "react";
import NoMatch from "./pages/NoMatch";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import Members from "./pages/Members";

import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/members" component={Members} />
          <Route component={NoMatch} /> 
        </Switch>
    </Router>
  );
}


export default App;
