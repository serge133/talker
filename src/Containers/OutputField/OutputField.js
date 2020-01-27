import React from "react";
import classes from "./OutputField.css";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actionTypes";
import { textToSpeech } from "../../Functions/TextToSpeech";
import ControlPanel from "./ControlPanel/ControlPanel";

const OutputField = props => {
  const voiceOutput = () => {
    const sentence = props.outputField.map(g => g.msg).join(" ");
    return textToSpeech(sentence, props.voice);
  };

  return (
    <div className={classes.TopBar}>
      <div className={classes.OutputField} onClick={voiceOutput}>
        {props.outputField.map((g, i) => (
          <div key={i} className={classes.OutputElement}>
            <img
              src={require(`../../assets/actionGrid/${g.type}/${g.img}`)}
              alt={g.msg}
            />
            <h4>{g.msg}</h4>
          </div>
        ))}
      </div>
      <ControlPanel
        deleteOutputElement={props.deleteOutputElement}
        clearOutputField={props.clearOutputField}
      />
    </div>
  );
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
