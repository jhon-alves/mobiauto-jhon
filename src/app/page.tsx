'use client'
import { Grid as MuiGrid, Typography, styled } from '@mui/material';
import CardConsult from '@/components/CardConsult';
import { useSearch  } from '@/hooks/useSearch';

const Grid = styled(MuiGrid)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
});

export default function SearchPage() {
  const { brands, models, years } = useSearch();

  return (
    <>
      <Grid item xs={12}>
        <Typography variant="h2">Tabela Fipe</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h3">
          Consulte o valor de um veículo de forma gratuita
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <CardConsult brands={brands} models={models} years={years} />
      </Grid>
    </>
  );
}
