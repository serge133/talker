import * as actionTypes from "../actionTypes";
import { updateObject } from "../utility";
// import nanoid from "nanoid";
// * Events
const initialState = {
  grid: {
    rows: 2,
    columns: 3,
    gridItems: [
      {
        type: "actions",
        img: "dance.svg",
        msg: "Dance"
      },
      {
        type: "actions",
        img: "eat.svg",
        msg: "Eat"
      },
      {
        type: "actions",
        img: "jump.svg",
        msg: "Jump"
      },
      {
        type: "actions",
        img: "running.svg",
        msg: "Run"
      },
      {
        type: "actions",
        img: "stop.svg",
        msg: "Stop"
      },
      {
        type: "actions",
        img: "swim.svg",
        msg: "Swim"
      },
      {
        type: "actions",
        img: "talk.svg",
        msg: "Talk"
      },
      {
        type: "actions",
        img: "walk.svg",
        msg: "Walk"
      },
      {
        type: "actions",
        img: "write.svg",
        msg: "Write"
      },
      {
        type: "living",
        img: "fish.svg",
        msg: "Fish"
      },
      {
        type: "places",
        img: "home.svg",
        msg: "Home"
      },
      {
        type: "places",
        img: "school.svg",
        msg: "School"
      },
      {
        type: "things",
        img: "bag.svg",
        msg: "Bag"
      },
      {
        type: "things",
        img: "book.svg",
        msg: "Book"
      },
      {
        type: "things",
        img: "bus.svg",
        msg: "Bus"
      },
      {
        type: "things",
        img: "car.svg",
        msg: "Car"
      },
      {
        type: "things",
        img: "pen.svg",
        msg: "Pen"
      },
      {
        type: "things",
        img: "shopping_cart.svg",
        msg: "Shopping Cart"
      }
    ]
  }
};

const changeGridSize = (state, action) => {
  const { rows, columns } = action;
  return updateObject(state, {
    grid: { ...state.grid, rows: rows, columns: columns }
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_GRID_SIZE:
      return changeGridSize(state, action);
    default:
      return state;
  }
};

export default reducer;
