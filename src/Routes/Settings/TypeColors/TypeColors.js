import React, { useRef } from "react";
import classes from "./TypeColors.css";
import PropTypes from "prop-types";

const TypeColors = props => {
  // const typeColorArray = Object.entries(props.typeColors);

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
          key={t}
          onClick={e => props.openColorPicker(e, t.type, t.color)}
        >
          <h2 className={classes.Type}>{t.type} - </h2>
          <div style={{ backgroundColor: t.color }} className={classes.Color} />
        </div>
      ))}
    </section>
  );
};

TypeColors.propTypes = {
  typeColors: PropTypes.array.isRequired,
  changeTypeColor: PropTypes.func.isRequired,
  openColorPicker: PropTypes.func.isRequired
};

export default TypeColors;
