import * as React from 'react';
import { useState } from "react"
import { Link } from "react-router-dom";
import CheckList from '../components/CheckList';
import VerticalStepper from '../components/VerticalStepper';

export const SecondStep = () => {
    const [solutionDebts, setSolutionDebts] = useState([]);
    const [businessDebts, setBusinessDebts] = useState([]);

    return (
        <div style={{display: 'flex'}}>
            <div style={{ margin: "auto", width: "100%", maxWidth: "800px", textAlign: "left" }}>
                <h1>Deudas y servicios</h1>
                <h2>Deuda técnica</h2>
                <CheckList title={"Deuda técnica solución"} list={solutionDebts} setList={setSolutionDebts}/>
                <CheckList title={"Deuda técnica de capacidades empresariales"} list={businessDebts} setList={setBusinessDebts}/>
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
            <VerticalStepper step={1}/>
        </div>
    )
}