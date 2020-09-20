import React from 'react';

import "./configBox.css"

import gear_icon from '../../../../assets/gear.svg';

function ConfigBox() {
    return (
        <div id="config-box" className="box">
            <div className="box-container">
                <img src={gear_icon} alt="Configuração"/>
            </div>
        </div>
    );
}

export default ConfigBox;