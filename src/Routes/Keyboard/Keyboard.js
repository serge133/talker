import React from "react";
import KeyboardComponent from "../../Components/Keyboard/Keyboard";
import Menu from "../../Components/Menu/Menu";
// import classes from "./Keyboard.css";

const Keyboard = () => {
  return (
    <div>
      <Menu currentPath="/keyboard" />
      <KeyboardComponent />
    </div>
  );
};

export default Keyboard;
