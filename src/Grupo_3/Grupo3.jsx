import React from 'react'
import './style.css'
import { useState } from 'react';
import Ventana from "./componentes.jsx"

function Grupo3() {
  const[modo,setModo]=useState("default")

  const ChangeMode=()=>{
    if (modo==="default"){
      setModo("ansiedad")
    }else{
      setModo("default")
    }
    
  }
  return (
    <div>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"></link>
      <div class="form-check form-switch">
      <input class="form-check-input Position" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={()=>ChangeMode()}>
        
      </input>
      <label class="form-check-label Position" for="flexSwitchCheckDefault"></label>
    </div>
      <h1 id='titulo' class={modo}>Ansiedad</h1>
    <div class='text' >
      <p class={modo} >
        La ansiedad es un trastorno común que afecta a muchas personas en todo el mundo, manifestándose a través de síntomas físicos y emocionales. Es crucial entender sus síntomas, causas y opciones de tratamiento para brindar un apoyo efectivo a quienes la padecen.
      </p>
      <h4 id='subtitulo' class={modo}>¿Cómo definimos la ansiedad en sí?</h4>
      <p class={modo}>
        La ansiedad es un sentimiento de miedo, temor e inquietud. Puede hacer que sude, se sienta inquieto y tenso, y tener palpitaciones acelerdas.
      </p>

      <h3>Una de las formas de detectarla es a través de los síntomas. Estos síntomas son:</h3>
      <ul id='lista'>
        <li>•Dificultad para respirar</li>
        <li>•Palpitaciones aceleradas</li>
        <li>•Sensación de mareo</li>
        <li>•Sudor</li>
        <li>•La presentación de varios eventos de miedo</li>
        <li>•Temblores</li>
        <li>•Inquietud</li>
        <li>•Molestias inexplicables</li>
        <li>•Dolores</li>
        <li>•Pánico</li>
        <li>•Debilidad o cansancio</li>
        <li>•Problemas para concentrarse o para pensar en algo que no sea la preocupación actual</li>
      </ul>
    </div>
    <Ventana mod={modo}/>
  </div>
  )
}

export default Grupo3;