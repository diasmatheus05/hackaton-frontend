import React from 'react';

import "./mainPage.css";

import MainBox from './components/mainBox/mainBox';
import NotificationBox from './components/notificationBox/notificationBox';
import HoursBox from './components/hoursBox/hoursBox';
import ConfigBox from './components/configBox/configBox';
import StudyBox from './components/studyBox/studyBox';

function MainPage() {
    return (
        <div id="main-page">
            <MainBox />
            <div className="box-row row1">
                <NotificationBox />
                <HoursBox />
            </div>
            <div className="box-row row2">
                <ConfigBox />
                <StudyBox />
            </div>
        </div>
    );
}

export default MainPage;