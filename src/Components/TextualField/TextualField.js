import React from "react";
import classes from "./TextualField.css";
import PropTypes from "prop-types";
import closeSVG from "../../assets/close.svg";
const TextualField = props => {
  return (
    <div className={classes.TextualField}>
      <h1 className={classes.Text} onClick={props.activateVoice}>
        {props.text}
      </h1>
      <section className={classes.Controls}>
        <img
          src={closeSVG}
          alt="delete"
          onClick={props.backspace}
          onDoubleClick={props.clear}
        />
      </section>
    </div>
  );
};

TextualField.propTypes = {
  text: PropTypes.string.isRequired,
  backspace: PropTypes.func.isRequired,
  clear: PropTypes.func.isRequired,
  activateVoice: PropTypes.func.isRequired
};

export default TextualField;
