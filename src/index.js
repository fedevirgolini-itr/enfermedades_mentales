import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Inicio from './Inicio/Inicio';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Grupo1 from './Grupo_1/Grupo1';
import Grupo2 from './Grupo_2/Grupo2';
import Grupo3 from './Grupo_3/Grupo3';
import Grupo4 from './Grupo_4/Grupo4';
import Grupo5 from './Grupo_5/Grupo5';
import Grupo6 from './Grupo_6/Grupo6';
import Grupo7 from './Grupo_7/Grupo7';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Inicio />} />
          <Route path='grupo1' element={<Grupo1/>} />
          <Route path='grupo2' element={<Grupo2/>} />
          <Route path='grupo3' element={<Grupo3/>} />
          <Route path='grupo4' element={<Grupo4/>} />
          <Route path='grupo5' element={<Grupo5/>} />
          <Route path='grupo6' element={<Grupo6/>} />
          <Route path='grupo7' element={<Grupo7/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
