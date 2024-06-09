import React from 'react'

import './index5.css';
import Sintomas from './Sintomas';
import Enfoques from './Enfoques';
import Conclusion from './Conclusiones';
import Causas from './Causas';
import Definición from './Definición';
import Apoyo from './Apoyo';
import Test from './Test';

function Grupo5() {
  return (
    <main >
      <div className="container">
        <img class='cabeceraimg' src="https://images.vexels.com/content/130396/preview/floral-ornamented-divider-decoration-63e429.png" alt="Día del T.Bipolar" />
        <div className='titulo-lindo'>
          <h1>Transtorno de Bipolaridad</h1>
        </div>
        <img class='inicioimg' src="https://ananeuropsicologia.com/wp-content/uploads/2023/03/Bipolaridad_2.png" alt="Día del T.Bipolar" />
        <Definición />
        <Sintomas />
        <Causas />
        <Enfoques />
        <Apoyo />
        <Conclusion />
        <br></br>
        <p>__________________________________________________</p>
        <h6>***Recuerde que para un diagnostico certero debe asistir a un especialista***</h6>
        <br></br>
        <br></br>
        <h2>Test de Conocimientos</h2>
        <p>Con respecto a lo leído, responda para ver que tanto aprendió y recuerda</p>
        <Test />
        <img class='cabeceraimg' src="https://images.vexels.com/content/130396/preview/floral-ornamented-divider-decoration-63e429.png" alt="Día del T.Bipolar" />
      </div>
    </main>

  )
}

export default Grupo5;