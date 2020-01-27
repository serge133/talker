import React from "react";
import classes from "./ControlPanel.css";
import PropTypes from "prop-types";
import closeSVG from "../../../assets/close.svg";

const ControlPanel = props => {
  return (
    <div className={classes.ControlPanel}>
      <img
        src={closeSVG}
        alt="Erase Output Field"
        className={classes.Control}
        onClick={props.deleteOutputElement}
        onDoubleClick={props.clearOutputField}
      />
    </div>
  );
};

ControlPanel.propTypes = {
  deleteOutputElement: PropTypes.func.isRequired
};

export default ControlPanel;
