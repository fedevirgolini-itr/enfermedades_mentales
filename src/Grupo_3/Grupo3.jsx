import React from 'react'
import './style.css'
import { useState } from 'react';

function Grupo3() {
  const[modo,setModo]=useState("default")
  const ChangeMode=()=>{
    if (modo==="default"){
      setModo("Ansiedad")
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
      <h1 class={modo}>Página destinada para el contenido del grupo</h1>
  
    </div>
  )
}

export default Grupo3;