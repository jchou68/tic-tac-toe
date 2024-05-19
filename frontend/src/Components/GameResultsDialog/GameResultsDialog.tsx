import { Dialog, DialogContent, DialogContentText } from "@mui/material";
import { MoveType } from "../../Models";

export interface GameResultDialogProps {
    dialogOpen?: boolean;
    handleClose?: () => void;
    winner?: MoveType;
}

export const GameResultDialog = ({
    dialogOpen = false,
    handleClose = () => {},
    winner = MoveType.pending,
} : GameResultDialogProps) => {
    let gameResultText;

    switch(winner) {
        case MoveType.playerA:
            gameResultText = 'Player A won!';
            break;
        case MoveType.playerB:
            gameResultText = 'Player B won!';
            break;
        case MoveType.draw:
            gameResultText = "Draw!";
            break;
        default:
            gameResultText = "";
    }

    return (
        <>
            <Dialog
                open={dialogOpen}
                onClose={handleClose}
            >
                <DialogContent>
                    <DialogContentText>{gameResultText}</DialogContentText>
                </DialogContent>
            </Dialog>
        </>
    );
}