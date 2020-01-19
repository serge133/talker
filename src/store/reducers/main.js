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
    gridItems: folders
  }
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

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_GRID_SIZE:
      return changeGridSize(state, action);
    case actionTypes.CHANGE_GRID:
      return changeGrid(state, action);
    case actionTypes.SET_VOICE:
      return setVoice(state, action);
    default:
      return state;
  }
};

export default reducer;
