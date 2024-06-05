import React, { useEffect } from 'react'
import './style.css'
import { useState } from 'react';
import Ventana from "./Ventanas.jsx"

function Grupo3() {

  const[modo,setModo]=useState("default")
const[positionX,setPositionX]=useState([50,"after",90])
const[lucky,SetLucky]=useState(0)

  const ChangeMode=()=>{
    if (modo==="default"){
      setModo("ansiedad")
    }else{
      setModo("default")
    }
    
  }


   
  function MoreText(){
    if(modo=="default"){
      setPositionX([-30,"Position"])
    }
    else{
      setPositionX([Math.random()*90,"after", Math.random()*300])
      if(lucky>=Math.random() * 200){
        setPositionX([-30,"Position",0])
    }
    SetLucky(lucky+1)
    }
  }
  return (
    <div>

      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"></link>
      <div class="form-check form-switch">
      <input class="form-check-input " type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={()=>ChangeMode()}>
        
      </input>
      <label class="form-check-label " for="flexSwitchCheckDefault"></label>
    </div>
      <h1 class={`titulo`}>Ansiedad</h1>
    <div class={`${modo} `} >
      <p>
        La ansiedad es un trastorno común que afecta a muchas personas en todo el mundo, manifestándose a través de síntomas físicos y emocionales. Es crucial entender sus síntomas, causas y opciones de tratamiento para brindar un apoyo efectivo a quienes la padecen.
      </p>
      <h4 class={`subtitulo `}>¿Cómo definimos la ansiedad en sí?</h4>
      <p>
        La ansiedad es un sentimiento de miedo, temor e inquietud. Puede hacer que sude, se sienta inquieto y tenso, y tener palpitaciones acelerdas.
      </p>
      <h3>Una de las formas de detectarla es a través de los síntomas. Estos síntomas son:</h3>
      <ul class='lista'>
        <li>Dificultad para respirar</li>
        <li>Palpitaciones aceleradas</li>
        <li>Sensación de mareo</li>
        <li>Sudor</li>
        <li>La presentación de varios eventos de miedo</li>
        <li>Temblores</li>
        <li>Inquietud</li>
        <li>Molestias inexplicables</li>
        <li>Dolores</li>
        <li>Pánico</li>
        <li>Debilclassad o cansancio</li>
        <li>Problemas para concentrarse o para pensar en algo que no sea la preocupación actual</li>
      </ul>
    </div>
    <button class="MoreText" style={{ left: `${positionX[0]}%` , top: `${positionX[2]}px`}} onClick={()=>MoreText()}>Seguir leyendo</button>
    


    <div class={ `${positionX[1]} ${modo}`} >
    <h4 class='subtitulo'>La ansiedad puede ser causada de distintas formas </h4>
    <h5 class='subtitulo'>•Causas</h5>
      <p>
      Las causas de los trastornos de ansiedad no están completamente definidas, pero pueden incluir factores genéticos y experiencias traumáticas. 
</p>
<h5 class='subtitulo'>•Causas Médicas</h5>
      <p>
      Médicamente, la ansiedad puede ser síntoma de enfermedades como problemas cardíacos, diabetes, trastornos de tiroides, respiratorios, abuso o abstinencia de sustancias, dolor crónico, entre otros. También puede ser efecto secundario de ciertos medicamentos. 
</p>
      <h4 class='subtitulo'>Algunos tratamientos pueden ser</h4>
      <h5 class='subtitulo'>•Psicoterapia</h5>
      <p>
      Consiste en, con la ayuda de un psicólogo, reducir el impacto que tiene el trastorno sobre la persona al aprender a manejarla y sobrellevarla, uno de los métodos es la terapia cognitiva conductual, que se basa en aprender a reconocer situaciones de estrés y reaccionar apropiadamente.</p>
<h5 class='subtitulo'>•Medicacion</h5>
      <p>
      Existen varias medicaciones para la ansiedad, aunque su uso depende de la salud del paciente y el tipo de ansiedad que padece, se pueden usar antidepresivos y otros medicamentos como buspirona o betabloqueadores para controlarlo a corto plazo. </p>
   <h6>Ambas funcionan, pero van mejor en conjunto.
</h6>  
<h4 class='subtitulo'>¿Cómo ayudo? </h4>
      <p>
      Algunas formas de ayudar a una persona sufriendo un ataque de ansiedad son: •Primero que nada, no alterarse, o la persona podría ponerse aún más ansiosa. •Si la persona suele tomar medicamentos cuando tiene ataques de pánico, dárselos, pero no forzarlo a tomarlos. 
      <br></br><br></br>•Alejarlo del estímulo que lo pone ansioso. 
<br></br>•Preguntarle lo que necesita en lugar de suponer o adivinar. 
<br></br>•Hablarle con frases cortas y simples para no confundirlo. 
<br></br>•No sorprenderlo con nada para no alterarlo más. 
<br></br><br></br>Una forma para hacer que se calme es pedirle que haga algo simple pero cansador. 
</p>
<h4 class='subtitulo'>Conclusión </h4>
      <p>
      La ansiedad es realmente dura y puede cambiar completamente la vida cotidiana de alguien. Pero hay esperanza. Hablar con alguien, ya sea un terapeuta o un médico, puede ayudar un montón. Y simplemente entender y ser amable con las personas que están pasando por esto puede marcar una gran diferencia. Con el tratamiento correcto y un poco de ayuda, podemos manejar la ansiedad y hacer que las cosas sean un poco más fáciles. 

</p>
   
      </div>
      <Ventana mod={modo}/>
  </div>
  )
}

export default Grupo3;