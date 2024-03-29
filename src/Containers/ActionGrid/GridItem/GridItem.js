import React from "react";
import classes from "./GridItem.css";
import PropTypes from "prop-types";
import folderSVG from "../../../assets/folder.svg";

const GridItem = props => {
  return (
    <div
      className={classes.GridItem}
      style={{ border: `3px solid ${props.typeColor}` }}
      onClick={() =>
        props.handleClick({
          type: props.type,
          folder: props.isFolder,
          img: props.img,
          msg: props.msg
        })
      }
    >
      {props.isFolder && (
        <img src={folderSVG} alt="Folder" className={classes.FolderIcon} />
      )}
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
  isFolder: PropTypes.bool.isRequired,
  img: PropTypes.string.isRequired,
  msg: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  typeColor: PropTypes.string.isRequired
};

export default GridItem;
