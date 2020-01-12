import React from "react";
import classes from "./OutputField.css";
import PropTypes from "prop-types";
import { textToSpeech } from "../../Functions/TextToSpeach";
import announceSVG from "../../assets/announce.svg";
import closeSVG from "../../assets/close.svg";

const OutputField = props => {
  const voiceOutput = () => {
    const sentence = props.field.map(g => g.msg).join(" ");
    return textToSpeech(sentence);
  };

  return (
    <div className={classes.OutputField}>
      {props.field.map((g, i) => (
        <div
          key={i}
          className={classes.OutputElement}
          onClick={() => textToSpeech(g.msg)}
        >
          <img
            src={require(`../../assets/actionGrid/${g.type}/${g.img}`)}
            alt={g.msg}
          />
          <h4>{g.msg}</h4>
        </div>
      ))}
      {/* <h3>{sentence}</h3> */}
      <div className={classes.Controls}>
        <img
          src={announceSVG}
          alt="Announce Voice"
          className={classes.Control}
          onClick={voiceOutput}
        />
        <img
          src={closeSVG}
          alt="Erase Output Field"
          className={classes.Control}
          onClick={props.clearField}
        />
      </div>
    </div>
  );
};

OutputField.propTypes = {
  field: PropTypes.array.isRequired,
  clearField: PropTypes.func.isRequired
};

export default OutputField;
