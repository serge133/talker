import React from "react";
import classes from "./GridActions.css";
import PropTypes from "prop-types";

const GridActions = props => {
  return (
    <div className={classes.GridActions}>
      <button onClick={props.previousPage} className={classes.PreviousPage}>
        Previous Page
      </button>
      <button onClick={props.nextPage} className={classes.NextPage}>
        Next Page
      </button>
    </div>
  );
};

GridActions.propTypes = {
  nextPage: PropTypes.func.isRequired,
  previousPage: PropTypes.func.isRequired
};

export default GridActions;
