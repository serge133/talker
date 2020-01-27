import React, { useState } from "react";
import classes from "./Keyboard.css";
import PropTypes from "prop-types";
import Key from "./Key/Key";
import { textToSpeech } from "../../Functions/TextToSpeech";
import { regKeyboard, capsKeyboard } from "./KeyboardLayout";

const Keyboard = props => {
  const [keyboard, setKeyboard] = useState(regKeyboard);
  const [pressedShift, setPressedShift] = useState(false);
  const handleClick = letter => {
    // Handles CapsLock
    if (letter === "caps") return setKeyboard(capsKeyboard);
    if (letter === "CAPS") return setKeyboard(regKeyboard);
    if (letter === "SHIFT") return setKeyboard(regKeyboard);
    if (pressedShift) {
      setPressedShift(false);
      setKeyboard(regKeyboard);
    }
    if (letter === "Shift") {
      setPressedShift(true);
      return setKeyboard(capsKeyboard);
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
  record: PropTypes.func.isRequired
};

export default Keyboard;
