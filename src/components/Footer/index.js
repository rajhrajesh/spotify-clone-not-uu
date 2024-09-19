// Footer.js
import React from 'react';
import './index.css';
import { PlayCircleFilled, PauseCircleFilled, VolumeDown, VolumeUp } from '@mui/icons-material';
import { Slider } from '@mui/material';


const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__left">
                <img className="footer__albumLogo" src="https://via.placeholder.com/100" alt="" />
                <div className="footer__songInfo">
                    <h4>Song Title</h4>
                    <p>Artist</p>
                </div>
            </div>
            <div className="footer__center">
                <PlayCircleFilled className="footer__icon" />
                <PauseCircleFilled className="footer__icon" />
            </div>
            <div className="footer__right">
                <VolumeDown />
                <Slider />
                <VolumeUp />
            </div>
        </div>
    );
};

export default Footer;
