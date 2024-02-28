import React from 'react';
import './App.css';
import { Container, Grid } from '@mui/material';
import { GameBoard } from './Components';

function App() {
  return (
    <Grid container direction="column" alignItems="center" justifyContent="center" minHeight="100vH">
      <GameBoard />
    </Grid>
  );
}

export default App;
