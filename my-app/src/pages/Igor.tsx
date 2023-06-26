import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import ResponsiveAppBar from '../components/ResponsiveAppBar';

export const Igor: React.FC = () => {
  return (
    <>
      <Grid container>
        <ResponsiveAppBar />
        <Grid item xs={12} paddingTop={'50px'}>
          <Container>
            <Typography variant="h3">Igor</Typography>
          </Container>
        </Grid>
      </Grid>
    </>
  );
};
