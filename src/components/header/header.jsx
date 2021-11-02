import React from 'react';
import logo from '../../assets/images/logo.svg';
import phone from '../../assets/images/ic_phone.svg';
import './header.scss';

const Header = (props) => {
    return (
        <div className={`header ${props.border && 'border-button'}`}>
            <div className="header-contain">
                <div className="header-contain_logo">
                    <figure>
                        <img src={logo} alt="Logo de rimac"/>
                    </figure>
            </div>
            <div className="header-contain_contact">
                    <a href="#"> <img src={phone} className="icon-phone"/> <p>Llámanos</p></a> 
            </div>
            </div>
        </div>
    );
}

export default Header;
