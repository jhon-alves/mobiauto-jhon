import { useRouter } from 'next/navigation';
import { AppBar, Container, Box, Button } from '@mui/material';

export default function Navbar() {
  const router = useRouter();

  return (
    <AppBar position="sticky" color="secondary" enableColorOnDark>
      <Container maxWidth="lg">
        <Box display="flex" gap="1rem" padding="1rem">
          <Button
            color="primary"
            variant="contained"
            onClick={() => router.push('/')}
          >
            Projeto
          </Button>
          <Button
            color="primary"
            variant="contained"
            onClick={() => router.push('/exercise_1')}
          >
            Exercício 1
          </Button>
          <Button
            color="primary"
            variant="contained"
            onClick={() => router.push('/exercise_2')}
          >
            Exercício 2
          </Button>
          <Button
            color="primary"
            variant="contained"
            onClick={() => router.push('/exercise_3')}
          >
            Exercício 3
          </Button>
          <Button
            color="primary"
            variant="contained"
            onClick={() => router.push('/exercise_4')}
          >
            Exercício 4
          </Button>
        </Box>
      </Container>
    </AppBar>
  );
}