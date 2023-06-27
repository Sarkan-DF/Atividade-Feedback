import { Accordion, AccordionDetails, AccordionSummary, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const Diego: React.FC = () => {
  return (
    <>
      <Grid container>
        <ResponsiveAppBar />
        <Grid item xs={12} paddingTop={'50px'}>
          <Container>
            <Typography variant="h2" color={'white'} marginBottom={'20px'}>
              Diego
            </Typography>
            <Accordion>
              <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
                <ExpandMoreIcon />
                <Typography>Comunicativo</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>Bem comunicativo, que tem grande poder de persuasão e carisma..</Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary aria-controls="panel2a-content" id="panel2a-header">
                <ExpandMoreIcon />
                <Typography>Pontual</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Sempre chegar no horário, é preciso, cumprir prazos, respeitar os compromissos e faz o que foi
                  combinado.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary aria-controls="panel3a-content" id="panel3a-header">
                <ExpandMoreIcon />
                <Typography>Curioso</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Sempre correndo atrás de algo a mais, principalmente porque a curiosidade te desafia a fazer as coisas
                  de maneira diferente.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Container>
        </Grid>
      </Grid>
    </>
  );
};
