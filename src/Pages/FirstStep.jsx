import * as React from 'react';
import VerticalStepper from '../components/VerticalStepper';
import { Link } from "react-router-dom";
import Select from '../components/Select';
export const FirstStep = () => {
  
    return (
    <div>
        <div style={{display: 'flex'}}>
            <VerticalStepper step={1}/>
            <div style={{margin: 'auto'}}>
                <h1>Datos de la aplicación</h1>
                <form>
                    <Select/>
                </form>
                <h2>Datos principales</h2>
                <h2>Usuarios</h2>
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
        </div>

    </div>
    )
}