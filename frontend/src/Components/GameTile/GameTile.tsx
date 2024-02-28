import { Box } from "@mui/material";

export const GameTile = () => {
    return (
        <Box sx={{
            '&:hover': {
                backgroundColor: "#EABFFF",
            },
            backgroundColor: "#800080",
            height: "150px",
            width: "150px",
            padding: "10px",
        }}>
            
        </Box>
    );
}