import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Searching from "./pages/SearchPage";
import Saving from "./pages/SaveTime"

function App() {
  return (
    <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Searching} />
        <Route exact path="/saved" component={Saving} />
        <Route exact path="/saved/:id" component={Saving} />
        <Route component={NoMatch} /> 
      </Switch>
     
    </div>
  </Router>
);
}

export default App;
