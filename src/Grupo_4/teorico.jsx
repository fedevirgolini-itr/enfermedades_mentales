import React from 'react';
import './Grupo4.css'
function Teorico() {
  return (
    <div className='container-g4'>
      <h1 className="titulo">Trastorno Obsesivo Compulsivo (TOC) de limpieza</h1>
      <div className='seccion'>
      <img className="image-left" src={`${process.env.PUBLIC_URL}/imagenes/tocimg1.jpg`} alt="" />
      <div className="texto">
        <p>
        Comprendiendo y Apoyando a quienes lo Padecen</p>
        <br></br>
        <p>
        El Trastorno Obsesivo Compulsivo (TOC) de limpieza es una enfermedad mental que afecta a millones de personas en todo el mundo. Se lo caracteriza por pensamientos repetitivos y compulsivos sobre la limpieza y el orden, lo que puede causar gran ansiedad y sufrimiento. Es importante comprender esta condición para brindar el apoyo necesario a quienes la padecen.
        </p>
      </div>
      </div>
      <div className='seccion'>
        <div className='texto'>
          <h2> Desarrollo </h2>
        <p>
        El TOC de limpieza se manifiesta en pensamientos obsesivos sobre la contaminación y el contagio, llevando a las personas a realizar rituales compulsivos de limpieza. Esto puede interferir significativamente en la vida diaria, consumiendo mucho tiempo y generando estrés. Las causas del TOC de limpieza son multifacéticas, incluyendo factores genéticos, ambientales y psicológicos, como una ansiedad elevada desde la infancia.
        </p>
        </div>
      <img className="image-right" src={`${process.env.PUBLIC_URL}/imagenes/tocimg2.jpg`} alt="" />
      </div>
      <div className='seccion'>
        <img className="image-left" src={`${process.env.PUBLIC_URL}/imagenes/tocimg3.jpg`} alt="" />
        <div className='texto'>
        <h3>Tratamiento </h3>
      <p>
        El tratamiento para el TOC de limpieza puede incluir terapia cognitivo-conductual, medicamentos y terapia de exposición y respuesta preventiva (ERP). La terapia cognitivo-conductual ayuda a reemplazar los pensamientos compulsivos, mientras que la ERP implica la exposición gradual a situaciones que provocan ansiedad para aprender a tolerarla.Es fundamental para quiénes es rodean a alguien con TOC de limpieza entender la enfermedad y brindar apoyo y comprensión. No se debe facilitar los comportamientos compulsivos, sino fomentar la comunicación abierta y ofrecer un oído atento para que la persona pueda expresar sus sentimientos y pensamientos sin juicio.
      </p>
      </div>      
      </div>
      <div className='seccion'>
        <div className='texto'>
      <h4>Conclusión</h4>
      <p>
        El TOC de limpieza es una condición seria que puede afectar profundamente la calidad de vida de quienes la padecen. Sin embargo, con comprensión, apoyo y tratamiento adecuado, es posible manejar los síntomas y mejorar la calidad de vida de quienes sufren esta enfermedad.
      </p>
      <img className="image-right" src={`${process.env.PUBLIC_URL}/imagenes/download.png`} alt="" />
          </div>
        </div>
      </div>
    
  );
}

export default Teorico;
