import React, { useState } from 'react';
import './style.css';
import Ventana from "./Ventanas.jsx";

import MoreTextComponent from './moreText.jsx';

function Grupo3() {
  const [modo, setModo] = useState("default");
  const [positionX, setPositionX] = useState([50, "after", 0]);
  const [lucky, setLucky] = useState(0);
  const [activar, setActivar] = useState(false);
  const [ansiedadImage, setAnsiedadImage] = useState(0);

  const ChangeMode = () => {
    if (modo === "default") {
      setModo("ansiedad")
     
    } else {
      setModo("default")
      
      }
  };

  setTimeout(function() {
    if(modo==="ansiedad"){
    setAnsiedadImage(ansiedadImage+1)
    if(ansiedadImage===5){
      setAnsiedadImage(1)
    }
    }
    else{
      setAnsiedadImage(0)
    }
   }, Math.random() * 500);
   


  const handleMoreText = () => {
    if (modo === "default") {
      setPositionX([-300, 0]);
      setActivar(true);
     
    } else {
      setPositionX([Math.random() * 90, Math.random() * 300]);
      if (lucky >= Math.random() * 200) {
        setActivar(true);
        setPositionX([-300, 0]);
      }
      setLucky(lucky + 1);
    }
  };

  return (
    <div className='container'>
      <div>    
        <div className="form-check form-switch">
          <input 
            className="form-check-input" 
            type="checkbox" 
            role="switch" 
            id="flexSwitchCheckDefault" 
            onChange={ChangeMode}
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label>
        </div>
      
        <div className="card">
          <img  className={`"card-img"  ansi-${ansiedadImage}`}/>
          <div className="card-content">
            <h3 className="card-title">Otros síntomas</h3>
            <p className="card-description">Síntomas extras a los descritos en el artículo.</p>
          </div>
        </div>
      </div>

      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossOrigin="anonymous" />

      <div className='content'>
        <h1 id='titulo' className={`${modo}-izquierda`}>Ansiedad</h1>
        <div className="Position">
          <p className={`${modo}-derecha`}>
            La ansiedad es un trastorno común que afecta a muchas personas en todo el mundo, manifestándose a través de síntomas físicos y emocionales. Es crucial entender sus síntomas, causas y opciones de tratamiento para brindar un apoyo efectivo a quienes la padecen.
          </p>
          <h4 id='subtitulo' className={`${modo}-caer`}>¿Cómo definimos la ansiedad en sí?</h4>
          <p className={`${modo}-caer`}>
            La ansiedad es un sentimiento de miedo, temor e inquietud. Puede hacer que sude, se sienta inquieto y tenso, y tener palpitaciones aceleradas.
          </p>
          <h3 className={`${modo}-izquierda`}>Una de las formas de detectarla es a través de los síntomas. Estos síntomas son:</h3>
          <ul className='lista'>
            <li className={`${modo}-derecha`}>Dificultad para respirar</li>
            <li className={`${modo}-izquierda`}>Palpitaciones aceleradas</li>
            <li className={`${modo}-izquierda`}>Sensación de mareo</li>
            <li className={`${modo}-subir`}>Sudor</li>
            <li className={`${modo}-caer`}>La presentación de varios eventos de miedo</li>
            <li className={`${modo}-subir`}>Temblores</li>
            <li className={`${modo}-caer`}>Inquietud</li>
            <li className={`${modo}-subir`}>Molestias inexplicables</li>
            <li className={`${modo}-caer`}>Dolores</li>
            <li className={`${modo}-derecha`}>Pánico</li>
            <li className={`${modo}-izquierda`}>Debilidad o cansancio</li>
            <li className={`${modo}-derecha`}>Problemas para concentrarse o para pensar en algo que no sea la preocupación actual</li>
          </ul>
        </div>

        <button 
          className="MoreText" 
          style={{ left: `${positionX[0]}%`, top: `${positionX[1]}px`}} 
          onClick={handleMoreText}
        >
          Seguir leyendo
        </button>
        {activar && <MoreTextComponent modo={modo} />}
        <Ventana mod={modo} />
      </div>
    </div>
  );
}

export default Grupo3;