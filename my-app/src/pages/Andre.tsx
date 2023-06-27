import { Accordion, AccordionDetails, AccordionSummary, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const Andre: React.FC = () => {
  return (
    <>
      <Grid container>
        <ResponsiveAppBar />
        <Grid item xs={12} paddingTop={'50px'}>
          <Container>
            <Typography variant="h2" color={'white'} marginBottom={'20px'}>
              Andre
            </Typography>
            <Accordion>
              <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
                <ExpandMoreIcon />
                <Typography>Prestativo</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>Sempre estou disposto à ajudar os outros.</Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary aria-controls="panel2a-content" id="panel2a-header">
                <ExpandMoreIcon />
                <Typography>Extrovertido</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Sempre acabo contagiando amigos e colegas com as minhas bobagens e minha felicidade.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary aria-controls="panel3a-content" id="panel3a-header">
                <ExpandMoreIcon />
                <Typography>Ouvinte</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Sempre estou presente para ouvir e aconselhar quem busca um momento de desabafo.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Container>
        </Grid>
      </Grid>
    </>
  );
};
