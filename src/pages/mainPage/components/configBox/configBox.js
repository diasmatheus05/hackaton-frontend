import React from 'react';

import "./configBox.css"

// import gear_icon from '../../../../assets/gear.svg';
import chat_icon from '../../../../assets/chat.png';

function ConfigBox() {
    return (
        <div id="config-box" className="box">
            <div className="box-container">
                <a href="http://chat.zenvia.com/bot/db643b5653437037e09afb85b641aa59">
                    <img src={chat_icon} alt="Chat bot"/>
                </a>
            </div>
        </div>
    );
}

export default ConfigBox;