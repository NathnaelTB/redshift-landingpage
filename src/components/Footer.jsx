import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import logo from '../images/logo.png'


const Footer = () => {
    return (
        <div className="footer">

            <div className="white-area"></div>
            <div className="angled-line-1"></div>
            <div className="angled-line-2"></div>
            <img src={logo} alt="logo" width="200px" className="logo" />

            <div className="footer-content">
                <div className="social-media">
                    <h2>Instagram</h2>
                    <h2>Facebook</h2>
                    <h2>LinkedIn</h2>
                    <h2>Twitter</h2>
                    <h2>Tiktok</h2>
                </div>

                <div className="footer-line-1"></div>

                <div className="footer-address">
                    <div className="address-element">
                        <FontAwesomeIcon icon={faPhone} className="icon" />
                        +1259 496 4846
                    </div>
                    <div className="address-element">
                        <FontAwesomeIcon icon={faEnvelope} className="icon" />
                        redshifttricycle123@gmail.com
                    </div>
                    <div className="address-element">
                        <FontAwesomeIcon icon={faLocationDot} className="icon" />
                        Ethiopia, Addis Ababa
                    </div>
                </div>

                <div className="footer-line-2"></div>

                <div className="footer-choices">
                    <div className="footer-pagelinks">
                        <h3 className="footer-titles">Quick link</h3>
                        <div>About Us</div>
                        <div>Service</div>
                        <div>Gallery</div>
                    </div>
                    <div className="footer-agreement">
                        <h3 className="footer-titles">Condition and Agreement</h3>
                        <div>Privacy & Security Commitment</div>
                        <div>Customer Support Exellence</div>
                        <div>Stay Connected</div>
                    </div>
                </div> 
            </div>

            <div className="copyright">
                <div className="copyright__item"> <h2>&copy;</h2> 2024 Redshift. All Rights Reserved</div>
                <div className="copyright__item">Powered by Helder Technologies</div>
            </div>
        </div>
    );
}

export default Footer;  