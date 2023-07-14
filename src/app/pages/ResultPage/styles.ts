import {
  styled,
  Box as MuiBox
} from '@mui/material';

export const Container = styled(MuiBox)(({ theme }) => ({
  padding: theme.spacing(4),
  background: 'green',
}));

export const Chip = styled(MuiBox)(({ theme }) => ({
  padding: theme.spacing(2),
  background: 'green',
  color: 'white'
}));