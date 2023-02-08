import React from 'react';
// images
import githubImg from '../../img/github-white.png';
import instagramImg from '../../img/instagram-white.png';
import twitterImg from '../../img/twitter-white.png';
import linkedinImg from '../../img/linkedin-white.png';
import myLogo from '../../img/mylogo.svg';

import './style.css';

const Footer = () => {
    return (
        <div id="footer">
            <div id="copyright">
                <img id="myLogo-footer" src={myLogo} alt="carlos martinez logo "/>
                <p>&copy; {new Date().getFullYear()} Mehadi Hasan</p>
            </div>
            <div className="footer-social">
                <a href="https://github.com/Crypt06545" target="_blank" rel="noopener noreferrer">
                    <img src={githubImg} alt="Try again"/>
                </a>
                <a href="https://www.instagram.com/__lonely__mehadi_/" target="_blank" rel="noopener noreferrer">
                    <img src={instagramImg} alt="Try again"/>
                </a>
                <a href="/" target="_blank" rel="noopener noreferrer">
                    <img src={twitterImg} alt="Try again"/>
                </a>
                <a href="https://www.linkedin.com/in/mehadi-hasan" target="_blank" rel="noopener noreferrer">
                    <img src={linkedinImg} alt="Try again"/>
                </a>
            </div>
        </div>
    );
}
 
export default Footer;