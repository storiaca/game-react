import React, { Component } from "react";
import knightTour, {
  getPossibleMoves,
  isMoveAllowed,
  isBoardCompletelyVisited,
  knightTourRecursive
} from "../utils/knightTour";
import GameStats from "../components/GameStats";
import Square from "../components/Square";
import classes from "./Board.module.css";
class Board extends Component {
  state = {
    timer: 0,
    clicked: 0,
    lives: 0,
    level: 1
  };

  render() {
    const n = 100;
    const squareBoard = [...Array(n)].map((e, i) => (
      <Square key={i} number={i} />
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
