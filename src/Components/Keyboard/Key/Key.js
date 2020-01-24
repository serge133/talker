import React from "react";
import classes from "./Key.css";
import PropTypes from "prop-types";

const Key = props => {
  const className = props.letter === " " ? classes.SpaceBar : classes.Key;
  const style = {
    CAPS: {
      color: "lightgreen",
      fontSize: 30
    },
    caps: {
      fontSize: 30
    }
  };
  return (
    <div
      className={className}
      onClick={props.handleClick}
      style={style[props.letter]}
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
