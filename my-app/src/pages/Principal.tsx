import { Button, Container, Divider, Grid, Typography } from '@mui/material';
import React from 'react';
import GridCenterStyled from '../components/GridCenterStyled';
import PaperStyled from '../components/PaperStyled';
import { useNavigate } from 'react-router-dom';

import ResponsiveAppBar from '../components/ResponsiveAppBar';

const Principal: React.FC = () => {
  const navigate = useNavigate();
  const goRegister = () => {
    navigate('/cadastro');
  };

  return (
    <>
      <Grid container>
        <ResponsiveAppBar />
        <GridCenterStyled height={'500px'} width={'500px'} item xs={12}>
          <Container>
            <PaperStyled elevation={10}>
              <Grid item>
                <Typography variant="h3">Igor Matos</Typography>
                <Divider />
              </Grid>
              <Grid item paddingTop={'10px'} textAlign={'center'}>
                <Typography>
                  Detalhes?
                  <Button variant="text" color="primary" onClick={goRegister}>
                    Clique aqui!
                  </Button>
                </Typography>
              </Grid>
            </PaperStyled>
          </Container>
        </GridCenterStyled>
      </Grid>
    </>
  );
};

export default Principal;
