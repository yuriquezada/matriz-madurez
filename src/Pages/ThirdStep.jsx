import * as React from 'react';
import { useState } from "react"
import { Link } from "react-router-dom";
import CheckList from '../components/CheckList';
import TagList from '../components/TagList';
import TextArea from '../components/TextArea';
import VerticalStepper from '../components/VerticalStepper';

export const ThirdStep = () => {
    const [solutionDebts, setSolutionDebts] = useState([]);
    const [businessDebts, setBusinessDebts] = useState([]);
    const [awsServices, setAwsServices] = useState([]);

    return (
        <div style={{display: 'flex'}}>
            <div style={{ margin: "auto", width: "100%", maxWidth: "800px", textAlign: "left" }}>
                <Link to="/step2">
                    <button>
                        Regresar
                    </button>
                </Link>
                <h1>Integraciones</h1>
                <h2>Características</h2>
                <CheckList title={"Integraciones"} list={solutionDebts} setList={setSolutionDebts}/>
                <CheckList title={"Base de datos"} list={businessDebts} setList={setBusinessDebts}/>
                <h2>Monitoreo</h2>
                <TextArea/>
                <h2>Servicios Cloud</h2>
                <TagList title={"Servicios AWS"} list={awsServices} setList={setAwsServices}/>
                <TagList title={"Servicios GCP"} list={awsServices} setList={setAwsServices}/>
                <Link to="/step4">
                    <button>
                        Continuar
                    </button>
                </Link>
            </div>
            <VerticalStepper numberStep={3}/>
        </div>
    )
}