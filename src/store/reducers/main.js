import * as actionTypes from "../actionTypes";
import { updateObject } from "../utility";
import actionGrid, { folders } from "../../Layout/ActionGrid";

// import nanoid from "nanoid";
// * Events
const initialState = {
  voice: false,
  grid: {
    rows: 2,
    columns: 3,
    gridItems: folders,
    // typeColors: {
    //   actions: "pink",
    //   living: "purple",
    //   places: "green",
    //   things: "blue",
    //   food: "tomato"
    // }
    typeColors: [
      { type: "actions", color: "pink" },
      { type: "living", color: "purple" },
      { type: "places", color: "green" },
      { type: "things", color: "blue" },
      { type: "food", color: "tomato" }
    ]
  },
  outputField: []
};

const changeGridSize = (state, action) => {
  const { rows, columns } = action;
  return updateObject(state, {
    grid: { ...state.grid, rows: rows, columns: columns }
  });
};

const changeGrid = (state, action) => {
  const { layout } = action;
  if (layout === "folders") {
    return updateObject(state, {
      grid: { ...state.grid, gridItems: folders }
    });
  }
  const layoutTypes = ["actions", "things", "places", "living"];
  if (layoutTypes.some(l => l === layout)) {
    return updateObject(state, {
      grid: { ...state.grid, gridItems: actionGrid[layout] }
    });
  }
};

const setVoice = (state, action) => {
  const { voice } = action;
  return updateObject(state, {
    voice: voice
  });
};

const addElementToOutputField = (state, action) => {
  const { element } = action;
  return updateObject(state, {
    outputField: state.outputField.concat([element])
  });
};

const deleteOutputElement = (state, action) => {
  const copyOutputField = [...state.outputField];
  copyOutputField.splice(copyOutputField.length - 1, 1);
  return updateObject(state, { outputField: copyOutputField });
};

const clearOutputField = (state, action) => {
  return updateObject(state, { outputField: [] });
};

const changeTypeColor = (state, action) => {
  const { actionType, color } = action;
  const newTypeColors = [...state.grid.typeColors];
  const typeColorIndex = newTypeColors.findIndex(t => t.type === actionType);
  if (typeColorIndex < 0) return new Error("Index in type color is wrong");
  newTypeColors[typeColorIndex].color = color;
  return updateObject(state, {
    grid: {
      ...state.grid,
      typeColors: newTypeColors
    }
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_GRID_SIZE:
      return changeGridSize(state, action);
    case actionTypes.CHANGE_GRID:
      return changeGrid(state, action);
    case actionTypes.SET_VOICE:
      return setVoice(state, action);
    case actionTypes.ADD_ELEMENT_TO_OUTPUT_FIELD:
      return addElementToOutputField(state, action);
    case actionTypes.CLEAR_OUTPUT_FIELD:
      return clearOutputField(state, action);
    case actionTypes.DELETE_OUTPUT_ELEMENT:
      return deleteOutputElement(state, action);
    case actionTypes.CHANGE_TYPE_COLOR:
      return changeTypeColor(state, action);
    default:
      return state;
  }
};

export default reducer;
