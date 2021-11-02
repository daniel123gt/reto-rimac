import React from 'react';

const Blocktext = (props) => {
    return (
        <div className="blocktext">
            <h1 className="blocktext-title">{props.title}</h1>
            <p className="blocktext-secondtitle">{props.secondtitle}</p>
            <p className="blocktext-description">{props.description}</p>
        </div>
    );
}

export default Blocktext;
