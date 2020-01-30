import React, { useState } from "react";
import classes from "./Keyboard.css";
import PropTypes from "prop-types";
import Key from "./Key/Key";
import { textToSpeech } from "../../Functions/TextToSpeech";
import { regKeyboard, capsKeyboard } from "./KeyboardLayout";

const Keyboard = props => {
  const [keyboard, setKeyboard] = useState(regKeyboard[props.layout]);
  const [pressedShift, setPressedShift] = useState(false);
  const handleClick = letter => {
    // Handles CapsLock
    if (letter === "caps") return setKeyboard(capsKeyboard[props.layout]);
    if (letter === "CAPS") return setKeyboard(regKeyboard[props.layout]);
    if (letter === "SHIFT") return setKeyboard(regKeyboard[props.layout]);
    if (pressedShift) {
      setPressedShift(false);
      setKeyboard(regKeyboard[props.layout]);
    }
    if (letter === "Shift") {
      setPressedShift(true);
      return setKeyboard(capsKeyboard[props.layout]);
    }
    textToSpeech(letter, props.voice);
    props.record(letter);
  };

  return (
    <div className={classes.Keyboard} style={props.style}>
      {keyboard.map(letter => (
        <Key
          key={letter}
          letter={letter}
          handleClick={() => handleClick(letter)}
        />
      ))}
    </div>
  );
};

Keyboard.propTypes = {
  record: PropTypes.func.isRequired,
  layout: PropTypes.string.isRequired
};

export default Keyboard;
