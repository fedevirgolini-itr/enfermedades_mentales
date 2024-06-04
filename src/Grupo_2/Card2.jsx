import React from 'react'
import FOTO3 from "./TDAH3.jpeg"

function Card2() {
  return (
    <a href='/grupo2' className="group-card">
      <img src={FOTO3}/>
      <h3>TDAH</h3>
      <p>
        Breve descripción:
      </p>
      <p>
        El Trastorno por Déficit de Atención e Hiperactividad (TDAH) es un desorden neuropsiquiátrico del desarrollo que dificulta la capacidad de atención, el control de impulsos y la regulación de la actividad en quienes lo padecen.
      </p>
    </a>
  )
}

export default Card2;