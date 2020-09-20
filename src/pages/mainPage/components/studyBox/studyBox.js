import React, { useState, useEffect } from 'react';

import "./studyBox.css";

// import play_icon from '../../../../assets/play-button.svg';
import play_icon from '../../../../assets/iniciar.png';
import pause_icon from '../../../../assets/pause.png';

function StudyBox() {
    const [clicked, setClicked] = useState(false);
    const [time, setTime] = useState(0);

    // useEffect(() => {

    //     setTime(time+1)
    // }, [time])

    // function timer() {
    //     var aux = time + 1;

    //     if (aux < 10) {
    //         setTime("00:0" + aux + ":00");
    //     } else if (aux > 60) {
    //         aux = aux - 60;
    //         setTime("01:" + aux + ":00");
    //     } else {
    //         setTime("00:" + aux + "00");
    //     }
        
    //     setTimeout(timer(), 1000);
    // }

    return (
        <div id="study-box" className="box">
            <div className="box-container">
                {clicked 
                    ? <p>00:{time}: {setTimeout(()=> {setTime(time+1)}, 1000)}</p>
                    : <p>Iniciar <strong>estudo</strong></p>
                }
                <img src={clicked ? pause_icon : play_icon} alt="Play" onClick={() => setClicked(!clicked)} />
            </div>
        </div>
    );
}

export default StudyBox;