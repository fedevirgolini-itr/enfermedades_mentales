import React from 'react';
import './style.css';
import Sintomas from './sintomas';
import Conclusion from './conclusion';
import Acompañamiento from './acompañamiento';
import Tratamiento from './tratamiento';
import Causas from './causas';

function Grupo6() {
  return (
    <main >
      <div class="mi-elemento">
        <Causas />
        <br />
        <Sintomas />
        <br />
        <Tratamiento />
        <br />
        <Acompañamiento />
        <br />
        <Conclusion />

      </div>
    </main>
  )
}

export default Grupo6;