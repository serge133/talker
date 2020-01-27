import * as actionTypes from "../actionTypes";
import { updateObject } from "../utility";

const initialKeyboardState = {
  text: ""
};

const setText = (state, action) => {
  const { text } = action;
  return updateObject(state, { text: text });
};

const keyboardReducer = (state = initialKeyboardState, action) => {
  switch (action.type) {
    case actionTypes.SET_TEXT:
      return setText(state, action);
    default:
      return state;
  }
};

export default keyboardReducer;
