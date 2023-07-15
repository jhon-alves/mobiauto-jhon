'use client'
import {
  styled,
  Box as MuiBox,
  Chip as MuiChip,
  Container as MuiContainer
} from '@mui/material';

export const Container = styled(MuiContainer)(({ theme }) => ({
  paddingTop: theme.spacing(8),
}));

export const BoxContainer = styled(MuiBox)(({ theme }) => ({
  padding: theme.spacing(4),
  background: theme.palette.success.light,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  gap: 20
}));

export const Chip = styled(MuiChip)(({ theme }) => ({
  padding: theme.spacing(2),
  background: theme.palette.success.main,
  color: theme.palette.common.white,
  fontSize: 20
}));