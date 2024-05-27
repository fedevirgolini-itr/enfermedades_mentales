import React from 'react';
import './Inicio.css';
import Hero from './Hero';
import Bienvenida from './Bienvenida';
import Grupos from './Grupos';

function Inicio() {
  return (
      <main >
        <Hero />
        <Bienvenida/>
        <Grupos/>
      </main>
  );
}

export default Inicio;
