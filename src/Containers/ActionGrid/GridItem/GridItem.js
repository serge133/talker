import React from "react";
import classes from "./GridItem.css";
import PropTypes from "prop-types";

const GridItem = props => {
  const typeColor = {
    actions: "pink",
    living: "purple",
    places: "green",
    things: "blue",
    food: "tomato"
  };

  return (
    <div
      className={classes.GridItem}
      style={{ border: `3px solid ${typeColor[props.type]}` }}
      onClick={() =>
        props.handleClick({
          type: props.type,
          img: props.img,
          msg: props.msg
        })
      }
    >
      <img
        alt={props.msg}
        src={require(`../../../assets/actionGrid/${props.type}/${props.img}`)}
        className={classes.Img}
      />
      <h1 className={classes.Msg}>{props.msg}</h1>
    </div>
  );
};

GridItem.propTypes = {
  type: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  msg: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default GridItem;