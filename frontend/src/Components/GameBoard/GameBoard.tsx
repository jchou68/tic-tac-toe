import { Grid } from "@mui/material";
import { GameTile } from "../GameTile";
  
const GameBoardRow = () => {
    return (
        <Grid container item spacing={1} alignItems="center" justifyContent="center">
            <Grid item>
                <GameTile/>
            </Grid>
            <Grid item>
                <GameTile/>
            </Grid>
            <Grid item>
                <GameTile/>
            </Grid>
        </Grid>
    )
}

export const GameBoard = () => {
    return(
        <Grid container spacing={1}>
            <GameBoardRow />
            <GameBoardRow />
            <GameBoardRow />
        </Grid>
    );
}