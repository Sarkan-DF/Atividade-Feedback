import * as React from 'react';
import PaperStyled from './PaperStyled';
import { Button, Divider, Grid, Typography } from '@mui/material';

interface PaperDefaultProps {
  name: string;
  goRegister: () => void;
}

const interfacePaperDefault: React.FC<PaperDefaultProps> = ({ name, goRegister }) => {
  return (
    <>
      <PaperStyled elevation={10} sx={{ margin: '0px' }}>
        <Grid item>
          <Typography variant="h3">{name}</Typography>
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
    </>
  );
};

export default interfacePaperDefault;
