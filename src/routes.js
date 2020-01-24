import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// * Pages
import App from "./Routes/App/App";
import Settings from "./Routes/Settings/Settings";
import Keyboard from "./Routes/Keyboard/Keyboard";

const routing = (
  <Router>
    <Route exact path="/" component={App} />
    <Route exact path="/keyboard" component={Keyboard} />
    <Route exact path="/settings" component={Settings} />
  </Router>
);

export default routing;
