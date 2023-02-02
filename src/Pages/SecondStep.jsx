import * as React from 'react';
import { useState } from "react"
import { Link } from "react-router-dom";
import CheckList from '../components/CheckList';
import TagList from '../components/TagList';
import VerticalStepper from '../components/VerticalStepper';

export const SecondStep = () => {
    const [solutionDebts, setSolutionDebts] = useState([]);
    const [businessDebts, setBusinessDebts] = useState([]);
    const [awsServices, setAwsServices] = useState([]);
    const [gcpServices, setGcpServices] = useState([]);

    return (
        <div style={{display: 'flex'}}>
            <div style={{ margin: "auto", width: "100%", maxWidth: "800px", textAlign: "left" }}>
                <Link to="/step1">
                    <button>
                        Regresar
                    </button>
                </Link>
                <h1>Deudas y servicios</h1>
                <h2>Deuda técnica</h2>
                <CheckList title={"Deuda técnica solución"} list={solutionDebts} setList={setSolutionDebts}/>
                <CheckList title={"Deuda técnica de capacidades empresariales"} list={businessDebts} setList={setBusinessDebts}/>
                <h2>Servicios Cloud</h2>
                <TagList title={"Servicios AWS"} list={awsServices} setList={setAwsServices}/>
                <TagList title={"Servicios GCP"} list={gcpServices} setList={setGcpServices}/>

                <Link to="/step3">
                    <button>
                        Continuar
                    </button>
                </Link>
            </div>
            <VerticalStepper step={2}/>
        </div>
    )
}