import React from "react";
import classes from "./OutputField.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { textToSpeech } from "../../Functions/TextToSpeech";
import ControlPanel from "./ControlPanel/ControlPanel";

const OutputField = props => {
  const voiceOutput = () => {
    const sentence = props.field.map(g => g.msg).join(" ");
    return textToSpeech(sentence, props.voice);
  };

  return (
    <div className={classes.TopBar}>
      <div className={classes.OutputField}>
        {props.field.map((g, i) => (
          <div
            key={i}
            className={classes.OutputElement}
            onClick={() => textToSpeech(g.msg, props.voice)}
          >
            <img
              src={require(`../../assets/actionGrid/${g.type}/${g.img}`)}
              alt={g.msg}
            />
            <h4>{g.msg}</h4>
          </div>
        ))}
      </div>
      <ControlPanel voiceOutput={voiceOutput} clearField={props.clearField} />
    </div>
  );
};

OutputField.propTypes = {
  field: PropTypes.array.isRequired,
  clearField: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    voice: state.main.voice
  };
};

export default connect(mapStateToProps)(OutputField);
