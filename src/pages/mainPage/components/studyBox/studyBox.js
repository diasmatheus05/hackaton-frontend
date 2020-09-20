import React, { useState } from 'react';

import "./studyBox.css";

// import play_icon from '../../../../assets/play-button.svg';
import play_icon from '../../../../assets/iniciar.png';
import pause_icon from '../../../../assets/pause.png';

function StudyBox() {
    const [clicked, setClicked] = useState(false);

    return (
        <div id="study-box" className="box">
            <div className="box-container">
                {clicked 
                    ? <p>00:40:07</p>
                    : <p>Iniciar <strong>estudo</strong></p>
                }
                <img src={clicked ? pause_icon : play_icon} alt="Play" onClick={() => setClicked(!clicked)} />
            </div>
        </div>
    );
}

export default StudyBox;