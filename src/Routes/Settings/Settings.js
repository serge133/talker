import React, { useState, useEffect, Fragment } from "react";
import classes from "./Settings.css";
import * as actionTypes from "../../store/actionTypes";
import { connect } from "react-redux";
import Dropdown from "../../Components/Dropdown/Dropdown";
import TypeColors from "./TypeColors/TypeColors";
import { Link } from "react-router-dom";
import { ChromePicker } from "react-color";

const Settings = props => {
  const [availableVoices, setAvailableVoices] = useState([
    { name: "Default Voice" }
  ]);
  const [colorPicker, setColorPicker] = useState({
    color: "pink",
    actionType: "actions"
  });

  useEffect(() => {
    function setSpeech() {
      return new Promise(function(resolve, reject) {
        let synth = window.speechSynthesis;
        let id;

        id = setInterval(() => {
          if (synth.getVoices().length !== 0) {
            resolve(setAvailableVoices(synth.getVoices()));
            clearInterval(id);
          }
        }, 10);
      });
    }
    setSpeech();
  }, []);

  const dropDownStyle = {
    margin: "10px auto 10px auto"
  };

  const openColorPicker = (e, actionType, color) => {
    setColorPicker({
      color: color,
      actionType: actionType
    });
  };

  const setColor = ({ hex }) => {
    setColorPicker({ ...colorPicker, color: hex });
    props.changeTypeColor(colorPicker.actionType, colorPicker.color);
  };

  const GridSize = (
    <Fragment>
      <h1>Grid Size</h1>
      <Dropdown
        name={`${props.rows} rows, ${props.columns} columns`}
        style={{ ...dropDownStyle, zIndex: 999 }}
      >
        <li onClick={() => props.changeGridSize(2, 2)}>2 x 2</li>
        <li onClick={() => props.changeGridSize(2, 3)}>2 x 3</li>
        <li onClick={() => props.changeGridSize(3, 3)}>3 x 3</li>
        <li onClick={() => props.changeGridSize(5, 5)}>5 x 5</li>
        <li onClick={() => props.changeGridSize(5, 8)}>5 x 8</li>
      </Dropdown>
    </Fragment>
  );

  const Voice = (
    <Fragment>
      <h1>Voice</h1>
      <Dropdown
        name={!props.voice ? availableVoices[0].name : props.voice.name}
        style={{ ...dropDownStyle, zIndex: 99 }}
      >
        {availableVoices.map((voice, index) => (
          <li key={index} onClick={() => props.setVoice(voice)}>
            {voice.name}
          </li>
        ))}
      </Dropdown>
    </Fragment>
  );

  const Colors = (
    <Fragment>
      <h1>Colors</h1>
      <div className={classes.Colors}>
        <TypeColors
          typeColors={props.typeColors}
          changeTypeColor={props.changeTypeColor}
          openColorPicker={openColorPicker}
          chosenColor={colorPicker.actionType}
        />
        <div className={classes.ColorPicker} style={colorPicker}>
          {/* <h1 className={classes.ActionType}>{colorPicker.actionType}</h1> */}
          <ChromePicker onChangeComplete={setColor} color={colorPicker.color} />
        </div>
      </div>
    </Fragment>
  );

  const KeyboardLayout = (
    <Fragment>
      <h1>Keyboard Layout</h1>
      <Dropdown name={props.keyboardLayout}>
        <li onClick={() => props.setKeyboardLayout("QWERTY")}>QWERTY</li>
        <li onClick={() => props.setKeyboardLayout("ABCDEF")}>ABCDEF</li>
      </Dropdown>
    </Fragment>
  );

  return (
    <div className={classes.Settings}>
      {GridSize}
      {Voice}
      {Colors}
      {KeyboardLayout}
      <Link to="/" className={classes.Done}>
        Done
      </Link>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    rows: state.main.grid.rows,
    columns: state.main.grid.columns,
    voice: state.main.voice,
    typeColors: state.main.grid.typeColors,
    keyboardLayout: state.keyboard.layout
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeGridSize: (rows, columns) =>
      dispatch({
        type: actionTypes.CHANGE_GRID_SIZE,
        rows: rows,
        columns: columns
      }),
    setVoice: voice => dispatch({ type: actionTypes.SET_VOICE, voice: voice }),
    changeTypeColor: (actionType, color) =>
      dispatch({
        type: actionTypes.CHANGE_TYPE_COLOR,
        actionType: actionType,
        color: color
      }),
    setKeyboardLayout: layout =>
      dispatch({ type: actionTypes.SET_KEYBOARD_LAYOUT, layout: layout })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
