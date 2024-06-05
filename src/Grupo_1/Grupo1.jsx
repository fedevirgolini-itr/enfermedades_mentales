import React from "react";
import "./css/index2.css";
import QueEsDepresion from "./QueEsDepresion";
import Sintomas from "./Sintomas";
import Causas from "./Causas";
import Tratamiento from "./Tratamiento";
import Acompañamiento from "./Acompañamiento";

function Grupo1() {
  return (
    <div class="depresion">
      <link rel="stylesheet" type="text/css" href="css/index.css"></link>
      <div class="texto"></div>
      
      <QueEsDepresion/>
      <Causas/>
      <Sintomas/>
      <Tratamiento/>
      <Acompañamiento/>
    </div>
  );
}

export default Grupo1;
