import React from 'react';
import Header from '../../components/header/header';
import ShowCase from '../../components/showcase/showcase';
import Form from '../../components/form/form';
import './login.scss';

const Login = () => {
    return (
        <div className="login">
            <Header border={false}></Header>
            <div className="login_content">
                <ShowCase literals='{"ofert": "¡NUEVO!", "title": "Seguro Vehicular Tracking", "description": "Cuentanos donde le haras seguimiento a tu seguro"}' />
                <Form></Form>
            </div>
        </div>
    );
}

export default Login;
