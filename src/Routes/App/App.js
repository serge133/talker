import React from "react";
import classes from "./App.css";
import { connect } from "react-redux";

const App = props => {
  return <div className={classes.App}>{props.isReduxConnected}</div>;
};
const mapStateToProps = state => {
  return {
    isReduxConnected: state.root.redux
  };
};
export default connect(mapStateToProps)(App);
