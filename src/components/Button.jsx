import React from 'react';
import './NavBar.css'

const Button = (props) => {
    return <button className="nav-btn">{props.title}</button>
}

export default Button;