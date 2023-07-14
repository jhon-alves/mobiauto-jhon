import { Typography } from '@mui/material'
import { Container, Chip } from './styles'

export function ResultPage() {
  return (
    <Container>
      <Typography>Tabela Fipe: </Typography>
      <Chip>
        <Typography>R$ 91.618</Typography>
      </Chip>
      <Typography>Este é o preço de compra do veículo</Typography>
    </Container>
  );
}