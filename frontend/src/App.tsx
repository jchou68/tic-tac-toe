import * as React from 'react';
import './App.css';
import { Grid } from '@mui/material';
import { GameBoard } from './Components';
import { type MoveType } from './Models';

function App() {
  const [moves, setMoves] = React.useState<MoveType[][]>([[]]); 
  const [currPlayer, setCurrPlayer] = React.useState<"A" | "B">("A");

  const onSelectedMove = (row: number, col: number) => {
    const newMoves = [...moves];
    newMoves[row][col] = currPlayer;
    setMoves(newMoves);
    setCurrPlayer(prevPlayer => prevPlayer === "A" ? "B" : "A");
  };

  // Initalize the game board
  React.useEffect(() => {
    const board: MoveType[][] = [];
    for(let i=0; i < 3; i++) {
      const row: MoveType[] = [];
      for(let i=0; i < 3; i++) {
        row.push(null);
      }
      board.push(row);
    }

    setMoves(board);
  }, []);

  console.log({moves});

  return (
    <Grid container direction="column" alignItems="center" justifyContent="center" minHeight="100vH">
      <GameBoard board={moves} {...{onSelectedMove}}/>
    </Grid>
  );
}

export default App;
