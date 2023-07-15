'use client'
import { useEffect } from 'react';
import { Typography } from '@mui/material';
import { Container, BoxContainer, Chip } from './styles';
import { useAppDispatch, useAppSelector } from '@/helpers/store';
import { vehiclesActions } from '@/actions/vehicles.actions';

export default function ResultPage() {
  const dispatch = useAppDispatch();
  const {
    vehicleDetails,
    filters: { brand, model, year }
  } = useAppSelector(state => state.vehicles);

  useEffect(() => {
    dispatch(vehiclesActions.getVehicleDetails(brand.codigo, model.codigo, year.codigo));
  }, []);

  return (
    <Container maxWidth="lg">
      <BoxContainer>
        <Typography variant="h2">
          Tabela Fipe: Preço {vehicleDetails?.Marca} {vehicleDetails?.Modelo}
        </Typography>
        <Chip label={vehicleDetails?.Valor} />
        <Typography variant="caption">
          Este é o preço de compra do veículo
        </Typography>
      </BoxContainer>
    </Container>
  );
}