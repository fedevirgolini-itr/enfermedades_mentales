import React from 'react'

import Card1 from '../Grupo_1/Card1';
import Card2 from '../Grupo_2/Card2';
import Card3 from '../Grupo_3/Card3';
import Card4 from '../Grupo_4/Card4';
import Card5 from '../Grupo_5/Card5';
import Card6 from '../Grupo_6/Card6';
import Card7 from '../Grupo_7/Card7';

export default function Grupos() {
  return (
    <section className="groups">
          <h2>Contenido del sitio</h2>
          <div className="groups-cards">
            <Card1 />
            <Card2 />
            <Card3 />
            <Card4 />
            <Card5 />
            <Card6 />
            <Card7 />
          </div>
        </section>
  )
}
