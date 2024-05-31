import React from 'react'
import './Grupo2.css';

function Introduccion() {
  return (
    <div>
      <h1>Trastorno por Deficit de Atencion e Hiperactividad:</h1>
      <p>El Trastorno por Déficit de Atención e Hiperactividad (TDAH) se trata de un desorden neuropsiquiátrico del desarrollo<br />
        que afecta la capacidad para prestar atención, controlar ciertos impulsos y/o actividad de los que lo padecen.</p>
      <p>Es encontrado más común en jóvenes menores de 16 o 17 años, pero estos también pueden persistir en la edad adulta.<br />

      </p>
      <p>El diagnóstico de TDAH se establece clínicamente mediante una evaluación exhaustiva, como el DSM-5, que considera los<br />
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
    <>
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
          <p>- Medicamentos estimulantes (como metilfenidato o dextroanfetamina).</p>
          <p>- Intervención conductual.</p>
          <p>- Desarrollo de buenos hábitos para facilitar el día a día.</p>
        </li>
      </ul>
    </>
  );
}

function CausasYManejo() {
  return (
    <>
      <p>Las causas para el TDAH no son específicas. Algunas razones explícitas para el trastorno pueden ser:</p>
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
          <p>- Medicamentos estimulantes (como metilfenidato o dextroanfetamina).</p>
          <p>- Intervención conductual.</p>
          <p>- Desarrollo de buenos hábitos para facilitar el día a día.</p>
        </li>
      </ul>
    </>
  );
}

function Conclusion() {
  return (
    <div>
      <h1>Conclusión:</h1>
      <p>El TDAH es un trastorno que implica falta de atención, hiperactividad/impulsividad, o una combinación, presente más
        común en jóvenes, pero que se pueden presentar en la adultez. Su origen puede ser desconocido pero puede ser tratado
        con Farmacoterapia, terapia o con buenos hábitos.</p>
    </div>
  )
}

function Grupo2() {
  return (
    <div>
      <h1>Página destinada para el contenido del grupo 2</h1>
      <Introduccion />
      <SintomasYTratamientos />
      <CausasYManejo/>
      <Conclusion />
    </div>
  )
}

export default Grupo2;