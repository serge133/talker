import React from "react";
import classes from "./Key.css";
import PropTypes from "prop-types";

const Key = props => {
  const className = props.letter === " " ? classes.SpaceBar : classes.Key;
  const styles = {
    CAPS: {
      color: "tomato",
      fontSize: 30
    },
    caps: {
      fontSize: 30
    },
    Shift: {
      gridColumnStart: 1,
      gridColumnEnd: "span 2"
    },
    SHIFT: {
      gridColumnStart: 1,
      gridColumnEnd: "span 2",
      color: "tomato"
    }
  };
  return (
    <div
      className={className}
      onClick={props.handleClick}
      style={styles[props.letter]}
    >
      {props.letter}
    </div>
  );
};

Key.propTypes = {
  letter: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default Key;
