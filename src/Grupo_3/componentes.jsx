import React, { useState } from 'react';
import './style.css';

function Ventana(props) {
    const [x1, setX1] = useState(Math.random() * 1000);
    const [y1, setY1] = useState(Math.random() * 300);
    const [x2, setX2] = useState(Math.random() * 1000);
    const [y2, setY2] = useState(Math.random() * 300);
    const [x3, setX3] = useState(Math.random() * 1000);
    const [y3, setY3] = useState(Math.random() * 300);
    const [x4, setX4] = useState(Math.random() * 1000);
    const [y4, setY4] = useState(Math.random() * 300);
    const [x5, setX5] = useState(Math.random() * 1000);
    const [y5, setY5] = useState(Math.random() * 300);
    function borrar(x,y){
      
    }

    return (<div>
        <botton style={{ left: `${x1}px`, top: `${y1}px`, position: 'absolute' }} className={`${props.mod}-ventana-1`} onClick={borrar(x1,y1)}></botton>
        <botton style={{ left: `${x2}px`, top: `${y2}px`, position: 'absolute' }} className={`${props.mod}-ventana-2`} onClick={borrar(x2,y2)}></botton>
        <botton style={{ left: `${x3}px`, top: `${y3}px`, position: 'absolute' }} className={`${props.mod}-ventana-3`} onClick={borrar(x3,y3)}></botton>
        <botton style={{ left: `${x4}px`, top: `${y4}px`, position: 'absolute' }} className={`${props.mod}-ventana-4`} onClick={borrar(x4,y4)}></botton>
        <botton style={{ left: `${x5}px`, top: `${y5}px`, position: 'absolute' }} className={`${props.mod}-ventana-5`} onClick={borrar(x5,y5)}></botton>
        </div>);
}

export default Ventana;