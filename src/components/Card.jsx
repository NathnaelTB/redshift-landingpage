import React from 'react';
import './Card.css';

const Card = (props) => {
    return (
        <div className="card">
            <h3>{props.title}</h3>
            <p>{props.paragraph}</p>
        </div>
    );
}

export default Card;