import React from 'react';
import './thanks.scss';
import Header from '../../components/header/header';
import Showcase from '../../components/showcase/showcase';
import Blocktext from '../../components/blocktext/blocktext';
import Button from '../../components/button/button';

const Thanks = () => {
    return (
        <div className="thanks">
            <Header border={true}></Header>
            <Showcase variant="thanks"></Showcase>
            <Blocktext title="¡Te damos la bienvenida!" secondtitle="Cuenta con nosotros para proteger tu vehículo" description="Enviaremos la confirmación de compra de tu Plan Vehícular Tracking a tu correo: joel.sanchez@gmail.com"></Blocktext>
            <Button type="button" title="Cómo usar mi seguro"></Button>
        </div>
    );
}

export default Thanks;
