import React from 'react';
import './form.scss';
import Button from '../button/button';

const Form = () => {
    return (
        <div className="form content-wrap">
            <form className="form-contain">
                <legend>Déjanos tus datos</legend>
                <div className="form-contain_step">
                    <select name="" id="">
                        <option value="">DNI</option>
                        <option value="">CE</option>
                    </select>
                    <label htmlFor="">
                        <input type="number" placeholder="Nro. de doc" />
                    </label>
                </div>
                <div className="form-contain_step">
                    <label htmlFor="">
                        <input type="number" placeholder="Celular"/>
                    </label>
                </div>
                <div className="form-contain_step">
                    <label htmlFor="">
                        <input type="text" placeholder="Placa"/>
                    </label>
                </div>
                <div className="form-contain_check">
                    <label htmlFor="check">
                        <input type="checkbox" name="check" id="check" />
                        <span className="checkmark"></span>
                        <p>Acepto la <a href="#">Política de Protecciòn de Datos Personales</a> y los <a href="#">Términos y Condiciones.</a></p> 
                    </label>
                </div>
                <div className="form-contain_submit">
                    <Button type="submit" title="cotízalo"/>
                </div>
            </form>
        </div>
    );
}

export default Form;
