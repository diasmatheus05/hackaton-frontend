import React from 'react';

import "./studyBox.css";

import play_icon from '../../../../assets/play-button.svg';

function StudyBox() {
    return (
        <div id="study-box" className="box">
            <div className="box-container">
                <p>Iniciar estudo</p>
                <img src={play_icon} alt="Play"/>
            </div>
        </div>
    );
}

export default StudyBox;