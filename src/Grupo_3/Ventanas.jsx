import React, { useState } from 'react';
import './style.css';

function Ventana(props) {
    const[lucky,SetLucky]=useState(0)
    const [x1, setX1] = useState(Math.random() * 1500);
    const [y1, setY1] = useState(Math.random() *1500);
    const [x2, setX2] = useState(Math.random() * 1500);
    const [y2, setY2] = useState(Math.random() *1500);
    const [x3, setX3] = useState(Math.random() * 1500);
    const [y3, setY3] = useState(Math.random() *1500);
    const [x4, setX4] = useState(Math.random() * 1500);
    const [y4, setY4] = useState(Math.random() *1500);
    const [x5, setX5] = useState(Math.random() * 1500);
    const [y5, setY5] = useState(Math.random() *1500);
    const [x6, setX6] = useState(Math.random() * 1500);
    const [y6, setY6] = useState(Math.random() *1500);
    const [x7, setX7] = useState(Math.random() * 1500);
    const [y7, setY7] = useState(Math.random() *1500);
    const [x8, setX8] = useState(Math.random() * 1500);
    const [y8, setY8] = useState(Math.random() *1500);



    function borrar(x, y) {
        for (let i = 1; i <= 8; i++) {
            if (x === eval(`x${i}`) && y === eval(`y${i}`)) {
                setTimeout(function() {
                 eval(`setX${i}`)(Math.random() * 1500);
                    eval(`setY${i}`)(Math.random() *1500);

                }, Math.random() * 15000);
                eval(`setX${i}`)(-1000); 
                if(i==4 && lucky>=Math.random() * 10){
                    SetLucky(-1)
                    window.location.href="https://www.airforce.com/careers/special-warfare-and-combat-support?adobe_mc=TS%3D1712346606%7CMCMID%3D04560168137884966732012772811273173431%7CMCORGID%3D9A3A4AEA5C01FFA90A495EEF%2540AdobeOrg&ds_rl=1280510&ds_rl=1280513&gad_source=1&ds_rl=1280513&gclid=Cj0KCQjw0_WyBhDMARIsAL1Vz8vlkmMhXqYWzqoonz_vkwykWvTUzPWdSpLt-MJHYqoxtPmEKr7R3QoaAqrMEALw_wcB&gclsrc=aw.ds"
                }
                if(i==3 && lucky>=Math.random() * 10){
                    SetLucky(-1)
                    window.location.href="https://spyhunter.enigmasoftware.com/es/virus-eliminar/?kw=remove%20virus&gad_source=1&gclid=Cj0KCQjw0_WyBhDMARIsAL1Vz8tLM_LmmMwIsPQQCaN-WpF1jJEE1lsTqevWSAvomw9_FXA78c0Vx40aAq7EEALw_wcB"
                }
                if(i==2 && lucky>=Math.random() * 10){
                    SetLucky(-1)
                    window.location.href="https://veepn.com/blog/提防虚假病毒警告弹出窗口：如何识别和避免它们/?lang=zh"
                }
                if(i==1 && lucky>=Math.random() * 10){
                    SetLucky(-1)
                    window.location.href="https://www.icegif.com/rick-roll-21/"
                }
                if(i==5 && lucky>=Math.random() * 10){
                    SetLucky(-1)
                    window.location.href="https://www.carrefour.com.ar/promociones"
                }
                if(i==6 && lucky>=Math.random() * 10){
                    SetLucky(-1)
                    window.location.href="https://medlineplus.gov/spanish/anxiety.html"
                }
                if(i==7 && lucky>=Math.random() * 10){
                    SetLucky(-1)
                    window.location.href="https://www.mayoclinic.org/es/diseases-conditions/anxiety/symptoms-causes/syc-20350961"
                }
                if(i==8 && lucky>=Math.random() * 10){
                    SetLucky(-1)
                    window.location.href="https://www.cun.es/enfermedades-tratamientos/enfermedades/ansiedad#:~:text=¿%20Cuáles%20son%20los%20síntomas%20de,temblores%20o%20miedo%20%20a%20morirse"
                }
                SetLucky(lucky+1)
            }
        }
    }

    return (
        <div>
     
            <div style={{ left: `${x1}px`, top: `${y1}px`, position: 'absolute' }} className={`${props.mod}-ventana-1`} onClick={() => borrar(x1, y1)}></div>
            <div style={{ left: `${x2}px`, top: `${y2}px`, position: 'absolute' }} className={`${props.mod}-ventana-2`} onClick={() => borrar(x2, y2)}></div>
            <div style={{ left: `${x3}px`, top: `${y3}px`, position: 'absolute' }} className={`${props.mod}-ventana-3`} onClick={() => borrar(x3, y3)}></div>
            <div style={{ left: `${x4}px`, top: `${y4}px`, position: 'absolute' }} className={`${props.mod}-ventana-4`} onClick={() => borrar(x4, y4)}></div>
            <div style={{ left: `${x5}px`, top: `${y5}px`, position: 'absolute' }} className={`${props.mod}-ventana-5`} onClick={() => borrar(x5, y5)}></div>
            <div style={{ left: `${x6}px`, top: `${y6}px`, position: 'absolute' }} className={`${props.mod}-ventana-6`} onClick={() => borrar(x6, y6)}></div>
            <div style={{ left: `${x7}px`, top: `${y7}px`, position: 'absolute' }} className={`${props.mod}-ventana-7`} onClick={() => borrar(x7, y7)}></div>
            <div style={{ left: `${x8}px`, top: `${y8}px`, position: 'absolute' }} className={`${props.mod}-ventana-8`} onClick={() => borrar(x8, y8)}></div>
        </div>

    );
}

export default Ventana;