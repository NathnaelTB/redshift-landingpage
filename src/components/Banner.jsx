import React from 'react';
import './Banner.css';
import img from '../images/background-img.jpg';

const Banner = () => {
    return (
        <div className="banner">
            <h2>Welcome to Redshift <br />Services</h2>
            <p>
                At Redshift Corp, we take pride in our commitment to delivering exceptional
                solutions and services accross diverse sectors. With over seven years of expertise,
                we have successfully navigated the realms of construction, manufacturing and 
                strategic consultancy. Explore our range of offerings designed to bring value,
                innovation, and sustainability to every project and venture.
            </p>
            <h3>Feel free to tailor it according to your specific needs or preferences!</h3>
        </div>
    );
}

export default Banner;