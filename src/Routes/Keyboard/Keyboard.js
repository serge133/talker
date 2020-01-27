import React from "react";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actionTypes";
import KeyboardComponent from "../../Components/Keyboard/Keyboard";
import Menu from "../../Components/Menu/Menu";
import TextualField from "../../Components/TextualField/TextualField";
import { textToSpeech } from "../../Functions/TextToSpeech";
// import classes from "./Keyboard.css";

const Keyboard = props => {
  const keyboardStyle = {
    position: "absolute",
    top: "100px",
    left: "0",
    height: "calc(100vh - 100px)",
    gridGap: 0
  };

  const record = letter => {
    const text = props.text + letter;
    props.setText(text);
  };

  const backspace = () => {
    const text = props.text.split("");
    text.pop();
    props.setText(text.join(""));
  };

  const clear = () => props.setText("");

  const activateVoice = () => {
    textToSpeech(props.text, props.voice);
  };

  return (
    <div>
      <Menu currentPath="/keyboard" />
      <TextualField
        text={props.text}
        backspace={backspace}
        clear={clear}
        activateVoice={activateVoice}
      />
      <KeyboardComponent
        style={keyboardStyle}
        record={record}
        voice={props.voice}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    text: state.keyboard.text,
    voice: state.main.voice
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setText: text => dispatch({ type: actionTypes.SET_TEXT, text: text })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Keyboard);
