'use client'
import { Typography } from '@mui/material';
import { BoxContainer, Chip } from './styles';
import { useResult } from '@/hooks/useResult';

export default function ResultPage() {
  const { vehicleDetails } = useResult();

  return (
    <BoxContainer>
      <Typography variant="h2">
        Tabela Fipe: Preço {vehicleDetails?.Marca} {vehicleDetails?.Modelo}
      </Typography>
      <Chip label={vehicleDetails?.Valor} />
      <Typography variant="caption">
        Este é o preço de compra do veículo
      </Typography>
    </BoxContainer>
  );
}