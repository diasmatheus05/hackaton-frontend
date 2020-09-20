import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import "./hoursBox.css";

function HoursBox() {
    return (
        <div id="hours-box" className="box">
            <div className="box-container">
                <p>Horas <strong>estudadas</strong></p>
                <div className="text">
                    <p>15</p>
                    <p>horas</p>
                </div>
                <CircularProgressbar 
                    value={75}
                    strokeWidth={8}
                    styles={{
                        root: {
                            maxWidth: '120px',
                        },
                        path: {
                          stroke: '#04d976',
                        },
                        trail: {
                          stroke: '#DEE3E5',
                        },
                        text: {
                            fontSize: '20px',
                        
                            fill: '#364147',
                        },
                    }}
                />
            </div>
        </div>
    );
}

export default HoursBox;