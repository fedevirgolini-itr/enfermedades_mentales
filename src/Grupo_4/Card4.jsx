import React from 'react'
import { Link } from 'react-router-dom';

function Card4() {
  return (
    
    
    <Link to='/grupo4' className="group-card">
      <img src={`${process.env.PUBLIC_URL}/imagenes/tocimg4.jpg`} alt="foto pertinente al tema" />
      <h3><b>Trastorno Obsesivo Compulsivo (TOC) de Limpieza</b></h3>
      <p>
      Comprendiendo y Apoyando a quienes lo Padecen.
      </p>
      <p>
  El Trastorno Obsesivo Compulsivo (TOC) de limpieza es una condición mental que afecta a millones de personas globalmente, caracterizada por pensamientos recurrentes y compulsiones relacionadas con la limpieza y el orden. Estos pensamientos pueden desencadenar ansiedad y sufrimiento significativos. La comprensión de esta condición es fundamental para proporcionar el apoyo adecuado a aquellos que la padecen, permitiendo así una mejor calidad de vida y tratamiento.
      </p>
    </Link>
    
  )
}

export default Card4;