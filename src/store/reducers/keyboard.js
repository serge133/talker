import * as actionTypes from "../actionTypes";
import { updateObject } from "../utility";

const initialKeyboardState = {
  text: "",
  layout: "QWERTY"
};

const setText = (state, action) => {
  const { text } = action;
  return updateObject(state, { text: text });
};

const setKeyboardLayout = (state, action) => {
  const { layout } = action;
  return updateObject(state, { layout: layout });
};

const keyboardReducer = (state = initialKeyboardState, action) => {
  switch (action.type) {
    case actionTypes.SET_TEXT:
      return setText(state, action);
    case actionTypes.SET_KEYBOARD_LAYOUT:
      return setKeyboardLayout(state, action);
    default:
      return state;
  }
};

export default keyboardReducer;
