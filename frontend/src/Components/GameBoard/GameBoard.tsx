import { Grid } from "@mui/material";
import { GameTile } from "../GameTile";
import { type MoveType } from "../../Models";

export interface GameBoardProps {
    board: MoveType[][];
    onSelectedMove: (row: number, col: number) => void;
}

export const GameBoard = ({board, onSelectedMove}: GameBoardProps) => {
    return(
        <Grid container spacing={1}>
            {
                board.map((moveRow, i) => (
                    <Grid container item spacing={1} alignItems="center" justifyContent="center" key={`row${i}`}>
                        {
                            moveRow.map((move, j) => (
                                <Grid item key={`row${i}col${j}`}>
                                    <GameTile row={i} col={j} {...{onSelectedMove, move}}/>
                                </Grid>
                            ))
                        }
                    </Grid>
                )

                )
            }
        </Grid>
    );
}