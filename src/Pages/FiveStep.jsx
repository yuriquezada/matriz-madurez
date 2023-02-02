import * as React from 'react';
// import { useState } from "react"
import { Link } from "react-router-dom";
import Card from '../components/Card';
import VerticalStepper from '../components/VerticalStepper';
import { cloudification } from '../data/cloudification';

export const FiveStep = () => {
    // const [solutionDebts, setSolutionDebts] = useState([]);
    // const [businessDebts, setBusinessDebts] = useState([]);
    // const [awsServices, setAwsServices] = useState([]);

    return (
        <div style={{display: 'flex'}}>
            <div style={{ margin: "auto", width: "100%", maxWidth: "800px", textAlign: "left" }}>
                <Link to="/step4">
                    <button>
                        Regresar
                    </button>
                </Link>
                <h1>Cloudificación</h1>
                <p>Calificar los siguientes criterios</p>
                {
                    cloudification.map((elem)=>(
                        <Card name={elem.name} principles={elem.services}/>
                    ))
                }
                <Link to="/confirmation">
                    <button>
                        Enviar respuestas y culminar
                    </button>
                </Link>
            </div>
            <VerticalStepper step={4}/>
        </div>
    )
}