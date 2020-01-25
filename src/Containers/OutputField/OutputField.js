import React from "react";
import classes from "./OutputField.css";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actionTypes";
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
        {props.outputField.map((g, i) => (
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
      <ControlPanel
        voiceOutput={voiceOutput}
        deleteOutputElement={props.deleteOutputElement}
        clearOutputField={props.clearOutputField}
      />
    </div>
  );
};

OutputField.propTypes = {
  field: PropTypes.array.isRequired
  // deleteOutputElement: PropTypes.func.isRequired,
  // clearOutputField: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    voice: state.main.voice,
    outputField: state.main.outputField
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteOutputElement: () =>
      dispatch({ type: actionTypes.DELETE_OUTPUT_ELEMENT }),
    clearOutputField: () => dispatch({ type: actionTypes.CLEAR_OUTPUT_FIELD })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OutputField);
