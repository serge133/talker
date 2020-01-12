import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// * Pages
import App from "./Routes/App/App";

const routing = (
  <Router>
    <Route exact path="/" component={App} />
  </Router>
);

export default routing;
