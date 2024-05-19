import * as React from 'react';
import './App.css';
import { Grid, Typography } from '@mui/material';
import { GameBoard, GameResultDialog } from './Components';
import { MoveType, type PlayerType } from './Models';
import { ColorButton } from './Components/ColorButton';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { findWinner } from './utilites';

function App() {
  const [moves, setMoves] = React.useState<number[][]>([]); 
  const [board, setBoard] = React.useState<PlayerType[][]>([[]]); 
  const [currPlayer, setCurrPlayer] = React.useState<"A" | "B">("A");
  const [resultsDialogOpen, setResultsDialogOpen] = React.useState(false);
  const [reset, triggerReset] = React.useState<boolean>(false);
  const [gameResults, setGameResults] = React.useState<MoveType>();

  const onSelectedMove = (row: number, col: number) => {
    const newBoard = [...board];
    newBoard[row][col] = currPlayer;
    setBoard(newBoard);
    setMoves((prevMoves) => [...prevMoves, [row, col]]);
    setCurrPlayer(prevPlayer => prevPlayer === "A" ? "B" : "A");
  };

  // Initalize the game board
  React.useEffect(() => {
    const newBoard: PlayerType[][] = [];
    for(let i=0; i < 3; i++) {
      const row: PlayerType[] = [];
      for(let i=0; i < 3; i++) {
        row.push(null);
      }
      newBoard.push(row);
    }

    setResultsDialogOpen(false);
    setBoard(newBoard);
    setCurrPlayer("A");
    setMoves([]);
  }, [reset]);

  // Find Winner
  React.useEffect(() => {
    const winner = findWinner(moves);
    switch(winner) {
      case MoveType.playerA:
        setGameResults(MoveType.playerA);
        break;
      case MoveType.playerB:
        setGameResults(MoveType.playerB);
        break;
      case MoveType.draw:
        setGameResults(MoveType.draw);
        break;
    }

    if(winner != MoveType.pending) {
      setResultsDialogOpen(true);
    }
  }, [moves]);


  return (
    <Grid container spacing={1} direction="column" alignItems="center" justifyContent="center" minHeight="100vH">
      <GameResultDialog
        dialogOpen={resultsDialogOpen}
        handleClose={() => triggerReset(prevVal => !prevVal)}
        winner={gameResults}
        />
      <Grid item container direction="column" marginTop={1} marginBottom={1} spacing={1} alignItems="center" justifyContent="center">
        <Typography variant='h2' fontWeight={700} color="#3C005A">Tic-Tac-Toe</Typography>
        <Typography fontSize={20} fontWeight={600} color="#3C005A">Player {currPlayer}'s move </Typography>
      </Grid>
      <GameBoard {...{board, onSelectedMove}}/>
      <Grid item>
        <ColorButton variant='contained' startIcon={<RestartAltIcon/>} onClick={(_) => triggerReset(!reset)}>Reset</ColorButton>
      </Grid>
    </Grid>
  );
}

export default App;
