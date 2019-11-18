import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// * Pages
import App from './Routes/App/App';

export default (
    <Router>
        <Route exact path="/" component={App}/>
    </Router>
);


