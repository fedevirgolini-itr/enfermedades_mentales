import React from 'react'
import './Grupo2.css';
import FOTO1 from "./TDHA1.jpg"
import FOTO2 from "./TDAH2.jpg"
import FOTO3 from "./TDAH3.jpeg"

function Titulo() {
  return (
    <div>
      <h1 class = "title">Grupo 2</h1>
      <h1 class = "title" id='mainTitle'><font color="#00107a">T</font>rastorno por<br/> <font color="#00107a">D</font>eficit de <br/><font color="#00107a">A</font>tencion e <br/><font color="#00107a">H</font>iperactividad:</h1>
    </div>
  )
}

function Introduccion() {
  return (
    <div>
      <p>El Trastorno por Déficit de Atención e Hiperactividad (TDAH) se trata de un desorden neuropsiquiátrico del desarrollo
        que afecta la capacidad para prestar atención, controlar ciertos impulsos y/o actividad de los que lo padecen.</p>
      <p>Es encontrado más común en jóvenes menores de 16 o 17 años, pero estos también pueden persistir en la edad adulta.

      </p>
      <p>El diagnóstico de TDAH se establece clínicamente mediante una evaluación exhaustiva, como el DSM-5, que considera los
        aspectos médicos, del desarrollo, educativos, del contexto y psicológicos de cada individuo.</p>
      <p>Los síntomas del TDAH pueden variar en intensidad y presentación.</p>
      <p>Existen 3 tipos:</p>
      <ul>
        <li><p><strong>Con predominio del déficit de atención.</strong></p></li>
        <li><p><strong>Con predominio de hiperactividad/impulsividad.</strong></p></li>
        <li><p><strong>Combinado.</strong></p></li>
      </ul>
    </div>
  )
}

function SintomasYTratamientos() {
  return (
    <div>
      <img src={FOTO1} alt="" width="60%"/>
      <p>Hay síntomas que ayudan a reconocer el TDAH, estos son:</p>
      <ul>
        <li>
          <p>
            <strong>Problemas de atención:</strong> Falta de atención involuntaria a detalles; parece no escuchar, incluso cuando se le habla directamente; falta de concentración o distracción sencilla; olvido de cosas diarias o pérdida de objetos; descuidarse y cometer errores sencillos; problemas de organización; reuso de hacer ejercicios que requieran de gran esfuerzo mental; etc.
          </p>
          <p>
            <strong>Hiperactividad e impulsividad:</strong> Cambios de humor; impaciencia; hablar mucho; problemas para respetar turnos; problemas para relacionarse; moverse nerviosamente; estar en movimiento ayuda pensar; etc.
          </p>
        </li>
      </ul>
      <p>Los tratamientos para el TDAH son:</p>
      <ul>
        <li>
          <p>Medicamentos estimulantes (como metilfenidato o dextroanfetamina).</p>
        </li>
        <li>
          <p>Intervención conductual.</p>
        </li>
        <li>
          <p>Desarrollo de buenos hábitos para facilitar el día a día.</p>
        </li>
      </ul>
    </div>
  );
}

function CausasYManejo() {
  return (
    <div>
      <img src={FOTO3} alt="" width="55%"/>
      <p>Las causas para el TDAH no son específicas. Algunas razones explícitas para el trastorno pueden ser:</p>
      <ul>
      <li><p>Factores genéticos, bioquímicos, sensitivomotores, fisiológicos y/o conductuales.</p></li>
        <li><p>Exposición al plomo.</p></li>
        <li><p>Deficiencia de hierro.</p></li>
        <li><p>Peso al nacer menor a  1.500 g.</p></li>
        <li><p>Daño neurológico.</p></li>
        <li><p>Apnea obstructiva del sueño.</p></li>
        <li><p>Exposición prenatal a alcohol, tabaco y/o cocaína.</p></li>
        <li><p>Traumatismo craneoencefálico.</p></li>
      </ul>
      <p>Además del tratamiento,en el manejo del TDAH en la vida cotidiana se necesita un control de las actividades, además de crear un ambiente organizado y aprender estrategias de manejo de tiempo y tareas. El apoyo emocional y social también es fundamental para ayudar a las personas con TDAH a enfrentar los desafíos asociados con el trastorno y mejorar su calidad de vida, también acudir a profesionales ayuda al autocontrol y manejo del trastorno mediante técnicas.</p>
    </div>
  );
}

function Conclusion() {
  return (
    <div>
      <img src={FOTO2} alt="" />
      <h1 class = "title">Conclusión:</h1>
      <p>El TDAH es un trastorno que implica falta de atención, hiperactividad/impulsividad, o una combinación, presente más
        común en jóvenes, pero que se pueden presentar en la adultez. Su origen puede ser desconocido pero puede ser tratado
        con Farmacoterapia, terapia o con buenos hábitos.</p>
    </div>
  )
}

function Grupo2() {
  return (
  <div>
    <div id='container'><Titulo /></div>
    <div id="content">
    <Introduccion />
    <br />
    <SintomasYTratamientos />
    <br />
    <CausasYManejo/>
    <br />
    <Conclusion />
    </div>
  </div>
    
  )
}

export default Grupo2;