import * as React from 'react';
import './App.css';
import { Grid, Typography } from '@mui/material';
import { GameBoard } from './Components';
import { type MoveType } from './Models';
import { ColorButton } from './Components/ColorButton';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

function App() {
  const [moves, setMoves] = React.useState<MoveType[][]>([[]]); 
  const [currPlayer, setCurrPlayer] = React.useState<"A" | "B">("A");
  const [reset, triggerReset] = React.useState<boolean>(false);

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
    setCurrPlayer("A");
  }, [reset]);

  return (
    <Grid container spacing={1} direction="column" alignItems="center" justifyContent="center" minHeight="100vH">
      <Grid item container direction="column" marginTop={1} marginBottom={1} spacing={1} alignItems="center" justifyContent="center">
        <Typography variant='h2' fontWeight={700} color="#3C005A">Tic-Tac-Toe</Typography>
        <Typography fontSize={20} fontWeight={600} color="#3C005A">Player {currPlayer}'s move </Typography>
      </Grid>
      <GameBoard board={moves} {...{onSelectedMove}}/>
      <Grid item>
        <ColorButton variant='contained' startIcon={<RestartAltIcon/>} onClick={(_) => triggerReset(!reset)}>Reset</ColorButton>
      </Grid>
    </Grid>
  );
}

export default App;
