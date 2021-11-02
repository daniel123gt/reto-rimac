import React from 'react';
import './button.scss';

const Button = (props) => {
    return (
        <div className="button">
            <button type={props.type}>{props.title}</button>
        </div>
    );
}

export default Button;
