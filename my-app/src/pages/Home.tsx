import { CircularProgress, Container, Grid, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import PaperStyled from '../components/PaperStyled';
import GridCenterStyled from '../components/GridCenterStyled';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/principal');
    }, 10000);
  }, []);

  return (
    <>
      <Grid container>
        <GridCenterStyled height={''} width={'1000px'} item xs={12}>
          <Container>
            <PaperStyled>
              <Typography variant="h4">Bem Vindo ao Feedback!</Typography>
              <Typography marginBottom={'50px'} variant="h6">
                Você será redirecionado para a página principal!
              </Typography>
              <CircularProgress />
            </PaperStyled>
          </Container>
        </GridCenterStyled>
      </Grid>
    </>
  );
};

export default Home;
