import React from "react";
import classes from "./TypeColors.css";
import PropTypes from "prop-types";

const TypeColors = props => {
  /**
   * t[0] is type
   * t[1] is the color of the type
   */
  console.log(props.typeColors);
  return (
    <section className={classes.TypeColors}>
      {props.typeColors.map(t => (
        <div
          className={classes.TypeColor}
          key={t.type}
          onClick={e => props.openColorPicker(e, t.type, t.color)}
        >
          <h4
            className={
              props.chosenColor === t.type ? classes.ChosenType : classes.Type
            }
          >
            {t.type} -{" "}
          </h4>
          <div style={{ backgroundColor: t.color }} className={classes.Color} />
        </div>
      ))}
    </section>
  );
};

TypeColors.propTypes = {
  typeColors: PropTypes.array.isRequired,
  changeTypeColor: PropTypes.func.isRequired,
  openColorPicker: PropTypes.func.isRequired,
  chosenColor: PropTypes.string.isRequired
};

export default TypeColors;
