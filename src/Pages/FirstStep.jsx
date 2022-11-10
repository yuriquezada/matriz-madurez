import * as React from 'react';
import VerticalStepper from '../components/VerticalStepper';
import { Link } from "react-router-dom";
import Select from '../components/Select';
import { architectArray, projectArray } from '../data/firstStep';
import '../style/Form.css';
import Input from '../components/Input';
import TextArea from '../components/TextArea';

export const FirstStep = () => {
  
    return (
    <div>
        <div style={{display: 'flex'}}>
            <div style={{margin: 'auto', maxWidth: '800px', textAlign: 'left'}}>
                <h2>Datos de la aplicación</h2>
                <h3>Datos principales</h3>
                <form className='form-inputs'>
                    <Select label= {'Arquitecto'} options = {architectArray}/>
                    <Select label= {'Proyecto'} options = {projectArray}/>
                    <Select label= {'Proyecto'} options = {projectArray}/>
                </form>
                <form className='form-inputs'>
                    <TextArea label= {'Descripción técnica de la solución'}/>
                    <TextArea label= {'Objetivos del proyecto'}/>
                </form>
                <h3>Usuarios</h3>
                <Link to="/">
                    <button>
                        Regresar
                    </button>
                </Link>
                <Link to="/step2">
                    <button>
                        Continuar
                    </button>
                </Link>
            </div>
            <VerticalStepper step={1}/>
        </div>

    </div>
    )
}