import { Accordion, AccordionDetails, AccordionSummary, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const Guilherme: React.FC = () => {
  return (
    <>
      <Grid container>
        <ResponsiveAppBar />
        <Grid item xs={12} paddingTop={'50px'}>
          <Container>
            <Typography variant="h2" color={'white'} marginBottom={'20px'}>
              Guilherme
            </Typography>
            <Accordion>
              <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
                <ExpandMoreIcon />
                <Typography>Prestativo</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>Sempre disposto a ajudar.</Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary aria-controls="panel2a-content" id="panel2a-header">
                <ExpandMoreIcon />
                <Typography>Assertivo</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Confiança e segurança na hora de se posicionar em frente às situações, de forma equilibrada em
                  diferentes contextos.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary aria-controls="panel3a-content" id="panel3a-header">
                <ExpandMoreIcon />
                <Typography>Independente</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>Autonomo, não me deixo influenciar facilmente.</Typography>
              </AccordionDetails>
            </Accordion>
          </Container>
        </Grid>
      </Grid>
    </>
  );
};
