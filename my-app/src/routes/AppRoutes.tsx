import React from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Cadastro from '../pages/Cadastro';
import Principal from '../pages/Principal';
import Home from '../pages/Home';
import Recados from '../pages/ListaRecados';
import InserirRecados from '../pages/InserirRecados';
import EditarRecados from '../pages/EditarRecados';
import { Andre } from '../pages/Andre';
import { Diego } from '../pages/Diego';
import { Guilherme } from '../pages/Guilherme';
import { Igor } from '../pages/Igor';
import { Gabriela } from '../pages/Gabriela';

const ComponetName: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/principal" element={<Principal />} />
          <Route path="/andre" element={<Andre />} />
          <Route path="/diego" element={<Diego />} />
          <Route path="/gabriela" element={<Gabriela />} />
          <Route path="/guilherme" element={<Guilherme />} />
          <Route path="/igor" element={<Igor />} />
          {/* <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/editar-recados/:id" element={<EditarRecados />} />
          <Route path="/lista-recados" element={<Recados />} />
          <Route path="/inserir-recados" element={<InserirRecados />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default ComponetName;
