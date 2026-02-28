import React from 'react';
import './ScrollingBanner.css';
import bannerScorrevole from '../assets/banner-scorrevole.png';

const ScrollingBanner = ({ direction = 'left' }) => {
    return (
        <div className="scrolling-banner-container fade-in-up delay-1">
            <div className={`scrolling-banner-wrapper scrolling-banner-wrapper-${direction}`}>
                <img src={bannerScorrevole} alt="Banner Scorrevole" className="scrolling-banner-img" />
                <img src={bannerScorrevole} alt="Banner Scorrevole" className="scrolling-banner-img" />
            </div>
        </div>
    );
};

export default ScrollingBanner;
