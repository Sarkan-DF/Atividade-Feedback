import React from 'react';
import { GlobalStyles } from '@mui/material';
import backgroud from '../img/bg1.jpg';

const GlobalStyled: React.FC = () => {
  return (
    <>
      <GlobalStyles
        styles={{
          body: {
            padding: '0px',
            margin: '0px',
            background: `url(${backgroud})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
          },

          a: { textDecoration: 'none' }
        }}
      />
    </>
  );
};

export default GlobalStyled;
