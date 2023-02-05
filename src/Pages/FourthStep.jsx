import * as React from 'react';
// import { useState } from "react"
import { Link } from "react-router-dom";
import Card from '../components/Card';
import VerticalStepper from '../components/VerticalStepper';
import { matriz } from "../data/matriz";

export const FourthStep = () => {
    return (
        <div style={{display: 'flex'}}>
            <div style={{ margin: "auto", width: "100%", maxWidth: "800px", textAlign: "left" }}>
                <Link to="/step3">
                    <button>
                        Regresar
                    </button>
                </Link>
                <h1>Matriz de madurez</h1>
                <p>Calificar los siguientes criterios</p>
                {
                    matriz.map((elem)=>(
                        <Card name={elem.name} principles={elem.principles}/>
                    ))
                }
                <Link to="/step5">
                    <button>
                        Continuar
                    </button>
                </Link>
            </div>
            <VerticalStepper numberStep={4}/>
        </div>
    )
}