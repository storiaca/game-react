import React from "react";
import classes from "./Square.module.css";
const Square = props => {
  return (
    <div className={classes.Square} onClick={() => console.log(props.number)}>
      {props.number}
    </div>
  );
};

export default Square;
