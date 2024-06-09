import React from 'react';
import ansiedadImage from './imgs/icon.jpg'; 
import { Link } from 'react-router-dom';

function Card3() {
  return (
    <Link to='/grupo3' className="group-card">
      <img src={ansiedadImage} alt="foto pertinente al tema" />
      <h3>Ansiedad</h3>
      <p>
        Breve descripción.
      </p>
      <p>
      La ansiedad es una respuesta natural del cuerpo al estrés, caracterizada por una sensación de preocupación o temor sobre lo que está por venir. Aunque es una emoción normal, cuando se vuelve excesiva o persistente, puede interferir con la vida diaria y requerir atención profesional. La ansiedad puede manifestarse a través de síntomas físicos como palpitaciones, sudoración, y tensión muscular, así como síntomas psicológicos como inquietud, irritabilidad y dificultad para concentrarse.
      </p>
    </Link>
  );
}

export default Card3;
