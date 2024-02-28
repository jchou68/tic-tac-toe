import React from 'react';
import { Box } from "@mui/material";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';

const GameTileBox = ({children, ...props} : React.HTMLAttributes<HTMLDivElement>) => {
    return (
        <Box 
            component="div"
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                '&:hover': {
                    color: "#800080",
                    backgroundColor: "#EABFFF",
                },
                color: "white",
                backgroundColor: "#800080",
                height: "150px",
                width: "150px",
                padding: "10px",
            }}
            {...props}
        >
            {children}
        </Box>
    )
}

export interface GameTileProps {
    row: number,
    col: number,
    move: string | null,
    onSelectedMove: (row: number, col: number) => void;
}

export const GameTile = ({row, col, move, onSelectedMove}: GameTileProps) => {
    if(move === "A") {
        return (
            <GameTileBox>
                <CloseOutlinedIcon sx={{fontSize: 150}}/>
            </GameTileBox>
        );
    } else if(move === "B") {
        return (
            <GameTileBox>
                <CircleOutlinedIcon sx={{fontSize: 120}}/>
            </GameTileBox>
        );
    } else {
        return (
            <GameTileBox onClick={(_) => {onSelectedMove(row, col)}}/>
        );
    }
}