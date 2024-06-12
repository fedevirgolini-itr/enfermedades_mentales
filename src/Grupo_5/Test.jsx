import React, { useState } from 'react';

function Test() {
    const [formData, setFormData] = useState({
        email: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = () => {
        window.alert('Formulario enviado, sus resultados serán enviados a: ' + formData.nombre);
    };

    return (
        <div>
            <label htmlFor="email">Ingrese su email:</label>
            <input
                type="text"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
            />
            <br></br>
            <div>
                <label htmlFor="colorSelect"> ¿Cuál de las siguientes opciones describe mejor el trastorno bipolar?</label>
                <select onChange={handleChange}>
                    <option value="a"> Cambios de humor leves y ocasionales</option>
                    <option value="b"> Alternancia entre episodios de depresión y manía</option>
                    <option value="c">Miedo irracional a situaciones específicas</option>
                    <option value="d">Dificultades para concentrarse y mantener la atención</option>
                </select>
            </div>
            <br></br>
            <div>
                <label htmlFor="colorSelect"> ¿Cuál de los siguientes síntomas es característico de la fase maníaca del trastorno bipolar?
                </label>
                <select onChange={handleChange}>
                    <option value="a"> Sentimientos persistentes de tristeza y desesperanza
                    </option>
                    <option value="b"> Incremento de la energía y actividad
                    </option>
                    <option value="c">Retiro social y falta de interés en actividades placenteras</option>
                    <option value="d">Dificultad para conciliar el sueño y mantenerlo</option>
                </select>
            </div>
            <br></br>
            <div>
                <label htmlFor="colorSelect"> ¿Qué significa el término "hipomanía" en el contexto del trastorno bipolar?
                </label>
                <select onChange={handleChange}>
                    <option value="a"> Un estado de ánimo extremadamente bajo y deprimido
                    </option>
                    <option value="b">Un estado de ánimo anormalmente elevado y expansivo, pero menos severo que la manía
                    </option>
                    <option value="c">Una condición médica que afecta la función del hígado</option>
                    <option value="d">Una fase de sueño profundo y reparador
                    </option>
                </select>
            </div>
            <br></br>
            <div>
                <label htmlFor="colorSelect"> ¿Qué tipo de apoyo es más útil para alguien que sufre de trastorno bipolar?
                </label>
                <select onChange={handleChange}>
                    <option value="a"> Minimizar sus síntomas y negar la condición
                    </option>
                    <option value="b">Brindar comprensión y apoyo emocional
                    </option>
                    <option value="c">Ignorar la situación y no hablar del tema</option>
                    <option value="d">Una fase de sueño profundo y reparador
                    </option>
                </select>
            </div>
            <br></br>
            <div>
                <label htmlFor="colorSelect"> ¿Qué acción es importante tomar si alguien muestra signos de peligro inminente para sí mismo o para otros debido a su trastorno bipolar?
                </label>
                <select onChange={handleChange}>
                    <option value="a"> Dejar que la persona se las arregle sola
                    </option>
                    <option value="b">Llamar a emergencias o buscar ayuda médica inmediata
                    </option>
                    <option value="c">Ignorar la situación y esperar que mejore por sí sola</option>
                    <option value="d">Alejarse de la persona y evitar cualquier contacto con ella
                    </option>
                </select>
            </div>
            <br></br>
            <button onClick={handleSubmit}>Enviar</button>
        </div>
    );
}

export default Test;
