import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';


export const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText("#3C005A"),
    backgroundColor: "#3C005A",
    '&:hover': {
      color: "#3C005A",
      backgroundColor: "#EABFFF",
    },
  }));