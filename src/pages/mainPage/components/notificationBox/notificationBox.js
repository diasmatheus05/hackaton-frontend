import React from 'react';

import "./notificationBox.css"

import notification_icon from '../../../../assets/yellow-notfication.svg';

function NotificationBox() {
    return (
        <div id="notification-box" className="box">
            <div className="box-container">
                <div className="top">
                    <img src={notification_icon} alt="Notificações"/>
                    <p>Notificações</p>
                </div>

                <div className="notifications-wrapper">

                </div>
            </div>
        </div>
    );
}

export default NotificationBox;