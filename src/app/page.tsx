'use client'
import { Grid as MuiGrid, Typography, styled } from '@mui/material';
import Layout from '@/components/Layout';
import CardConsult from '@/components/CardConsult';
import CardSkeleton from '@/components/CardSkeleton';
import { useSearch  } from '@/hooks/useSearch';

const Grid = styled(MuiGrid)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
});

export default function SearchPage() {
  const { brands, models, years, loading } = useSearch();

  return (
    <Layout>
      <Grid item xs={12}>
        <Typography variant="h2">Tabela Fipe</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h3">
          Consulte o valor de um veículo de forma gratuita
        </Typography>
      </Grid>
      <Grid item xs={12}>
        {loading
          ? <CardSkeleton />
          : <CardConsult brands={brands} models={models} years={years} />
        }
      </Grid>
    </Layout>
  );
}
