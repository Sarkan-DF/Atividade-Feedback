import { Accordion, AccordionDetails, AccordionSummary, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const Igor: React.FC = () => {
  return (
    <>
      <Grid container>
        <ResponsiveAppBar />
        <Grid item xs={12} paddingTop={'50px'}>
          <Container>
            <Typography variant="h2" color={'white'} marginBottom={'20px'}>
              Igor
            </Typography>
            <Accordion>
              <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
                <ExpandMoreIcon />
                <Typography>Proatividade</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>Tem a capacidade de resolver problemas de maneira autônoma e antecipada.</Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary aria-controls="panel2a-content" id="panel2a-header">
                <ExpandMoreIcon />
                <Typography>Focado</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>Sempre concentrado, compenetrado, preocupado, com um objetivo em mente.</Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary aria-controls="panel3a-content" id="panel3a-header">
                <ExpandMoreIcon />
                <Typography>Assertividade</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Tem a habilidade de expor e defender um posicionamento de forma clara, tranquila, objetiva e sem gerar
                  conflitos.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Container>
        </Grid>
      </Grid>
    </>
  );
};
