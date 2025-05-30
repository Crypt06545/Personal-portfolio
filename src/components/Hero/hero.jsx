import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import SmoothScroll from 'smooth-scroll';
// import 'particles.js/particles';
import 'particles.js/particles';
// images
import githubImg from '../../img/github.png';
import instagramImg from '../../img/instagram.svg';
import twitterImg from '../../img/twitter3.svg';
import linkedinImg from '../../img/linkedin.svg';
// css
import './hero.css';
// --openssl-legacy-provide start
// "start": "cross-env NODE_OPTIONS=--openssl-legacy-provider react-scripts start"
// "start": "react-scripts start",

const particlesJS = window.particlesJS;

const Hero = () => {
    const { t } = useTranslation('global');

    const handleScroll = () => {
        const scroll = new SmoothScroll(),
        elmt = document.getElementById('about');
        scroll.animateScroll(elmt);
    }

    useEffect(() => {
        const jsonPath = window.innerWidth <= 800 ? './particlesjs-mobile-config.json' : './particlesjs-config.json'; 
        particlesJS.load('hero-container', jsonPath);
    }, []);

    return ( 
        <div id="hero-container">
            <div className="hero-text">
                <h1 className="hero-title">Mehadi Hasan</h1>
                <div className="hero-description">{t('hero.description')}</div>
                <div className="social-container">
                    <div className="social-item">
                        <a href="https://github.com/Crypt06545" target="_blank" rel="noopener noreferrer">
                            <img src={githubImg} alt="Try Again"/>
                        </a>
                    </div>
                    <div className="social-item">
                        <a href="https://www.instagram.com/__lonely__mehadi_/" target="_blank" rel="noopener noreferrer">
                            <img src={instagramImg} alt="Try Again"/>
                        </a>
                    </div>
                    {/* <div className="social-item">
                        <a href="/" target="_blank" rel="noopener noreferrer">
                            <img src={twitterImg} alt="Try Again"/>
                        </a>
                    </div> */}
                    <div className="social-item">
                        <a href="https://www.linkedin.com/in/mehadihasan0/" target="_blank" rel="noopener noreferrer">
                            <img src={linkedinImg} alt="Try Again"/>
                        </a>
                    </div>
                </div>
            </div>
            <div className="hero-button-container">
                <button onClick={handleScroll} className="learn-more-button">{t('hero.learn-more')}</button>
            </div>
        </div>
     );
}
 
export default Hero;