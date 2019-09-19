import React, { Component } from "react";
import GameStats from "../components/GameStats";
import Square from "../components/Square";
import classes from "./Board.module.css";
class Board extends Component {
  render() {
    const n = 100;
    const squareBoard = [...Array(n)].map((e, i) => (
      <Square key={i} number={i + 1} />
    ));

    return (
      <div className={classes.Container}>
        <div className={classes.SquareGrid}>{squareBoard}</div>
        <GameStats />
      </div>
    );
  }
}

export default Board;
