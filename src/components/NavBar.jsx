import React from 'react';
import Button from './Button';
import './NavBar.css';
import logo from '../images/logo.png';

const NavBar = () => {
    return (
        <div className="nav-bar">
            <img src={logo} alt="logo" width="70px" />
            <div className='nav-bar__options'>
                <div>Home</div>
                <div className="marked">Services</div>
                <div>product</div>
                <div>Blog</div>
            </div>
            <Button title="contact"/>
        </div>
    );
}

export default NavBar;