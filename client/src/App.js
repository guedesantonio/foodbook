import React from "react";
import NoMatch from "./pages/NoMatch";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import Members from "./pages/members";
import "./stylesheets/App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/members" component={Members} />
          <Route component={NoMatch} /> 
        </Switch>
    </Router>
  );
}


export default App;
