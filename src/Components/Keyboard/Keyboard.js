import React, { useState } from "react";
import classes from "./Keyboard.css";
// import PropTypes from "prop-types";
import Key from "./Key/Key";
import { textToSpeech } from "../../Functions/TextToSpeech";
import { regKeyboard, capsKeyboard } from "./KeyboardLayout";

const Keyboard = props => {
  const [keyboard, setKeyboard] = useState(regKeyboard);
  const handleClick = letter => {
    // Handles CapsLock
    if (letter === "caps") return setKeyboard(capsKeyboard);
    if (letter === "CAPS") return setKeyboard(regKeyboard);
    textToSpeech(letter, false);
  };
  return (
    <div className={classes.Keyboard}>
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

Keyboard.propTypes = {};

export default Keyboard;
