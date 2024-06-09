import './style.css';

function MoreText(props) {
  return (
    <div className={`${props.modo}`}>
      <h4 className={`${props.modo}-subir subtitulo`}>La ansiedad puede ser causada de distintas formas </h4>
      <h5 className={`${props.modo}-derecha subtitulo`}>•Causas</h5>
      <p className={`${props.modo}-caer`}>
        Las causas de los trastornos de ansiedad no están completamente definidas, pero pueden incluir factores genéticos y experiencias traumáticas. 
      </p>
      <h5 className={`${props.modo}-subir subtitulo`}>•Causas Médicas</h5>
      <p className={`${props.modo}-subir`}>
        Médicamente, la ansiedad puede ser síntoma de enfermedades como problemas cardíacos, diabetes, trastornos de tiroides, respiratorios, abuso o abstinencia de sustancias, dolor crónico, entre otros. También puede ser efecto secundario de ciertos medicamentos. 
      </p>
      <h4 className={`${props.modo}-derecha subtitulo`}>Algunos tratamientos pueden ser</h4>
      <h5 className={`${props.modo}-subir subtitulo`}>•Psicoterapia</h5>
      <p className={`${props.modo}-izquierda`}>
        Consiste en, con la ayuda de un psicólogo, reducir el impacto que tiene el trastorno sobre la persona al aprender a manejarla y sobrellevarla, uno de los métodos es la terapia cognitiva conductual, que se basa en aprender a reconocer situaciones de estrés y reaccionar apropiadamente.
      </p>
      <h5 className={`${props.modo}-subir subtitulo`}>•Medicacion</h5>
      <p className={`${props.modo}-subir subtitulo`}>
        Existen varias medicaciones para la ansiedad, aunque su uso depende de la salud del paciente y el tipo de ansiedad que padece, se pueden usar antidepresivos y otros medicamentos como buspirona o betabloqueadores para controlarlo a corto plazo.
      </p>
      <h6 className={`${props.modo}-derecha`}>Ambas funcionan, pero van mejor en conjunto.</h6>  
      <h4 className={`${props.modo}-derecha subtitulo`}>¿Cómo ayudo? </h4>
      <p className={`${props.modo}-caer`}>
        Algunas formas de ayudar a una persona sufriendo un ataque de ansiedad son: •Primero que nada, no alterarse, o la persona podría ponerse aún más ansiosa. •Si la persona suele tomar medicamentos cuando tiene ataques de pánico, dárselos, pero no forzarlo a tomarlos. 
        <br/><br/>•Alejarlo del estímulo que lo pone ansioso. 
        <br/>•Preguntarle lo que necesita en lugar de suponer o adivinar. 
        <br/>•Hablarle con frases cortas y simples para no confundirlo. 
        <br/>•No sorprenderlo con nada para no alterarlo más. 
        <br/><br/>Una forma para hacer que se calme es pedirle que haga algo simple pero cansador.
      </p>
      <h4 className={`${props.modo}-derecha subtitulo`}>Conclusión </h4>
      <p className={`${props.modo}-derecha`}>
        La ansiedad es realmente dura y puede cambiar completamente la vida cotidiana de alguien. Pero hay esperanza. Hablar con alguien, ya sea un terapeuta o un médico, puede ayudar un montón. Y simplemente entender y ser amable con las personas que están pasando por esto puede marcar una gran diferencia. Con el tratamiento correcto y un poco de ayuda, podemos manejar la ansiedad y hacer que las cosas sean un poco más fáciles.
      </p>
    </div>
  );
}

export default MoreText;