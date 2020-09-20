import React from 'react';
import Calendar from 'react-calendar';

import "./mainBox.css";

import user_icon from '../../../../assets/user.svg';
import chat_icon from '../../../../assets/chat.svg';

function MainBox() {
    return (
        <div id="main-box" className="box">
            <div className="box-container">
                <div className="top">
                    <div className="user">
                        <img src={user_icon} alt="Foto do aluno"/>
                        <div className="user-text">
                            <p>Bem vindo,</p>
                            <p className="name">Matheus</p>
                        </div>
                    </div>
                    <a href="http://chat.zenvia.com/bot/db643b5653437037e09afb85b641aa59">
                        <img src={chat_icon} alt="Chat bot"/>
                    </a>
                </div>
                <div className="mainBody">
                    <Calendar
                        className="calendar"
                        value={new Date()}
                        calendarType={"US"}
                    />
                    <div className="time-options">
                        <div className="option">9-10</div>
                        <div className="option">11-12</div>
                        <div className="option selected">13-14</div>
                        <div className="option">15-16</div>
                    </div>
                    <div className="estudo">
                        <p>Estudo de:</p>
                        <p className="subject">Física</p>
                        <p className="subject">Matemática</p>
                    </div>
                    <div className="next-events">
                        <p className="next">Próximos:</p>
                        <div className="events">
                            <p>Prova de</p>
                            <p>Conhecimentos gerais</p>
                        </div>
                        <div className="events">
                            <p>Prova de</p>
                            <p>Matemática</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainBox;