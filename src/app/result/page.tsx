'use client'
import { Typography, CircularProgress } from '@mui/material';
import { BoxContainer, Chip } from './styles';
import { useResult } from '@/hooks/useResult';

export default function ResultPage() {
  const { vehicleDetails, loading } = useResult();

  return (
    <BoxContainer>
      {loading ? <CircularProgress /> : (
        <>
          <Typography variant="h2">
            Tabela Fipe: Preço {vehicleDetails?.Marca} {vehicleDetails?.Modelo}
          </Typography>
          <Chip label={vehicleDetails?.Valor} />
          <Typography variant="caption">
            Este é o preço de compra do veículo
          </Typography>
        </>
      )}
    </BoxContainer>
  );
}