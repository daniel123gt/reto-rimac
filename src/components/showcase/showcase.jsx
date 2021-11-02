import React, { useEffect, useState } from 'react';
import imageShowCase from '../../assets/images/showcase-img-movil.svg';
import imageShowCaseD from '../../assets/images/showcase-img-desktop.svg';
import imageThanks from '../../assets/images/img-thanks-m.svg';
import './showcase.scss'

const Showcase = (props) => {

    const [literals, setLiterals] = useState('');

    useEffect(() => {
        if(props.literals){
            setLiterals(JSON.parse(props.literals));
        }
    },[]);
    return (
        <div className="showcase" variant={props.variant}>
            <div className="showcase-contain">
                <div className="showcase-contain_image">
                        {props.variant == "thanks" && (
                            <figure>
                                <img src={imageThanks} alt="image-showcase" className="showcase-contain_image--m"/>
                                <img src={imageThanks} alt="image-showcase" className="showcase-contain_image--d"/>
                            </figure>
                        ) || (
                            <figure>
                                <img src={imageShowCase} alt="image-showcase" className="showcase-contain_image--m"/>
                                <img src={imageShowCaseD} alt="image-showcase" className="showcase-contain_image--d"/>
                            </figure>
                        )}
                    
                </div>
                {literals != '' && (
                    <div className="showcase-contain_desc content-wrap">
                        <span>{literals.ofert}</span>
                        <h1>{literals.title}</h1>
                        <p>{literals.description}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Showcase;

