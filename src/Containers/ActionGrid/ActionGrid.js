import React from "react";
import classes from "./ActionGrid.css";
import PropTypes from "prop-types";
import GridItem from "./GridItem/GridItem";

const ActionGrid = props => {
  const gridStyle = {
    gridTemplate: `repeat(${props.rows}, 1fr) / repeat(${props.columns}, 1fr)`
  };

  const maxGridItems = props.rows * props.columns;

  const pagination = () => {
    const pages = Math.ceil(props.gridItems.length / maxGridItems);
    const pagedGridItems = [];
    let j = 0;
    for (let i = 0; j < pages; i += maxGridItems) {
      j++;
      pagedGridItems.push(props.gridItems.slice(i, i + maxGridItems));
    }
    return pagedGridItems;
  };
  // * GridItem successfully reads images from asset folder
  // Todo: Make the array map for the grid items by using an object

  return (
    <div className={classes.Grid} style={gridStyle}>
      {pagination()[props.page].map((gridItem, i) => (
        <GridItem
          key={i}
          type={gridItem.type}
          img={gridItem.img}
          msg={gridItem.msg}
          handleClick={props.handleClick}
        />
      ))}
    </div>
  );
};

ActionGrid.propTypes = {
  rows: PropTypes.number.isRequired,
  columns: PropTypes.number.isRequired,
  gridItems: PropTypes.array.isRequired,
  page: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default ActionGrid;
