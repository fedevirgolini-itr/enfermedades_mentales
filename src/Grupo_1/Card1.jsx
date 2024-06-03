import React from 'react'
import foto from './imgs/card1.png'

function Card1() {
  return (
    <a href='/grupo1' className="group-card">
      <img src={foto} alt="foto pertinente al tema" />
      <h3>Depresion</h3>
      <p>
        ¿Qué es?
      </p>
      <p>
      La depresión es un trastorno mental que afecta el estado de ánimo, los pensamientos y el comportamiento de una persona.
      </p>
    </a>
  )
}

export default Card1;