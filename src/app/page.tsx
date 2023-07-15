'use client'
import { useEffect } from 'react';
import { Grid as MuiGrid, Typography, styled } from '@mui/material';
import Layout from '@/components/Layout';
import CardConsult from '@/components/CardConsult';
import CardSkeleton from '@/components/CardSkeleton';
import { vehiclesActions } from '@/actions/vehicles.actions';
import { useAppDispatch, useAppSelector } from '@/helpers/store';

const Grid = styled(MuiGrid)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
});

export default function SearchPage() {
  const dispatch = useAppDispatch();
  const { 
    brands,
    models,
    years,
    filters: { brand, model },
    loading
  } = useAppSelector((state) => state.vehicles);

  useEffect(() => {
    dispatch(vehiclesActions.getAllBrands());
  }, []);

  useEffect(() => {
    if (brand.nome.length > 0) {
      dispatch(vehiclesActions.getAllModels(brand.codigo));
    }
  }, [brand]);

  useEffect(() => {
    if (model.nome.length > 0) {
      dispatch(vehiclesActions.getAllYears(brand.codigo, model.codigo));
    }
  }, [model]);

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
