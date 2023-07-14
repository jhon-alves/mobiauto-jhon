import {
  styled,
  Card as MuiCard
} from '@mui/material';

export const Card = styled(MuiCard)(({ theme }) => ({
  padding: theme.spacing(4)
}));