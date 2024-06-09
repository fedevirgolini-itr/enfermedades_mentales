import React from 'react'
import { Link } from 'react-router-dom';

function Card6() {
  return (
    <Link to='/grupo6' className="group-card">
      <img src="https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/1427E/production/_123785528_785290d5-55d8-4aa0-8461-78e4da7b7cd1.jpg" alt="foto pertinente al tema" />
      <h3>Dismorfia corporal</h3>
      <p>
        La dismorfia corporal, también conocida como trastorno dismórfico corporal (TDC), es un problema de salud mental que afecta a millones de personas en el mundo.
        Se caracteriza por una preocupación persistente y desmesurada por uno o más defectos percibidos en la apariencia física.
      </p>
      <p>
        Muchos se preguntaran que es y el TDC es un trastorno mental
        que se caracteriza por una preocupación persistente y desmesurada por uno o más defectos físicos.
        Estos defectos pueden ser reales o imaginarios, y a menudo son leves o imperceptibles para los demás.
      </p>
    </Link>
  )
}

export default Card6;