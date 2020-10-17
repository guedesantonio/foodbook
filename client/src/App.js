import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/login" component={Home} />
          <Route exact path="/signup" component={Home} />
          <Route exact path="/members" component={Saved} />
        </Switch>
    </Router>
  );
}


export default App;
/* <Route component={NoMatch} /> */