import { Container, Grid } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import PaperDefault from '../components/PaperDefault';

const Principal: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <Grid container>
        <ResponsiveAppBar />
        <Container
          sx={{
            display: 'flex',
            mt: '30px',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }}
        >
          <Grid container spacing={4}>
            <Grid item xs={4}>
              <PaperDefault goRegister={() => navigate('/andre')} name="André Oliveira" />
            </Grid>
            <Grid item xs={4}>
              <PaperDefault goRegister={() => navigate('/diego')} name="Diego Lins" />
            </Grid>
            <Grid item xs={4}>
              <PaperDefault goRegister={() => navigate('/gabriela')} name="Gabriela Leichtweis" />
            </Grid>

            <Grid item xs={2}></Grid>
            <Grid item xs={4}>
              <PaperDefault goRegister={() => navigate('/guilherme')} name="Guilherme Salazar" />
            </Grid>
            <Grid item xs={4}>
              <PaperDefault goRegister={() => navigate('/igor')} name="Igor Matos" />
            </Grid>

            <Grid item xs={2}></Grid>
          </Grid>
        </Container>
      </Grid>
    </>
  );
};

export default Principal;
