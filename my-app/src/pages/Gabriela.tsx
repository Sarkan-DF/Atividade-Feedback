import { Accordion, AccordionDetails, AccordionSummary, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const Gabriela: React.FC = () => {
  return (
    <>
      <Grid container>
        <ResponsiveAppBar />
        <Grid item xs={12} paddingTop={'50px'}>
          <Container>
            <Accordion>
              <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
                <ExpandMoreIcon />
                <Typography>Prestativa</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>Sempre está disposta à ajusar os colegas.</Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary aria-controls="panel2a-content" id="panel2a-header">
                <ExpandMoreIcon />
                <Typography>Inteligente</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>Se dedica e entende os conteúdos com facilidade (menos o redux).</Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary aria-controls="panel3a-content" id="panel3a-header">
                <ExpandMoreIcon />
                <Typography>Extrovertida</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>Sempre apresenta bom humor, o que estimula o grupo ao seu redor.</Typography>
              </AccordionDetails>
            </Accordion>
          </Container>
        </Grid>
      </Grid>
    </>
  );
};
