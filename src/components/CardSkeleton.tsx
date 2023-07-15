import { Box, Grid } from '@mui/material'; 
import { Card, Skeleton } from './styles';

export default function CardSkeleton() {
  return (
    <Card>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Skeleton variant="rounded" width="100%" height={56} />
        </Grid>
        <Grid item xs={12}>
          <Skeleton variant="rounded" width="100%" height={56} />
        </Grid>
        <Grid item xs={12}>
          <Skeleton variant="rounded" width="100%" height={56} />
        </Grid>
        <Grid item xs={12}>
          <Box display="flex" justifyContent="center">
            <Skeleton variant="rounded" width={170} height={37} />
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
}