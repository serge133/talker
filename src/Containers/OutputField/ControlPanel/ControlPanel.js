import React from "react";
import classes from "./ControlPanel.css";
import PropTypes from "prop-types";
import announceSVG from "../../../assets/announce.svg";
import closeSVG from "../../../assets/close.svg";

const ControlPanel = props => {
  return (
    <div className={classes.ControlPanel}>
      <img
        src={announceSVG}
        alt="Announce Voice"
        className={classes.Control}
        onClick={props.voiceOutput}
      />
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
  voiceOutput: PropTypes.func.isRequired,
  deleteOutputElement: PropTypes.func.isRequired
};

export default ControlPanel;
