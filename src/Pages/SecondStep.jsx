import * as React from 'react';
import { Link } from "react-router-dom";
import VerticalStepper from '../components/VerticalStepper';



export const SecondStep = () => {
    return (
    <div>
        <div style={{display: 'flex'}}>
            <VerticalStepper step={1}/>
            <div>
                <h1>Deudas y servicios</h1>
                <h2>Deuda técnica</h2>
                <h2>Usuarios</h2>
                <Link to="/step1">
                    <button>
                        Regresar
                    </button>
                </Link>
                <Link to="/step3">
                    <button>
                        Continuar
                    </button>
                </Link>
            </div>
        </div>

    </div>
    )
}