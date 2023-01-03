import * as React from 'react';
import { useState } from "react"
import { Link } from "react-router-dom";
import CheckListInput from '../components/ChecklistInput';
import CheckListItem from '../components/ChecklistItem';
import VerticalStepper from '../components/VerticalStepper';

export const SecondStep = () => {
    const [inputValue, setInputValue] = useState("")
    console.log(inputValue)

    const handleChange = event => {
        setInputValue(event.target.value);
      };

    const [data, setData] = useState([]);
    const append = () => {
        setData([...data, inputValue]);
        setInputValue("")
      };
    console.log(inputValue, "esta es la data ahora")
    console.log(data)
    
    return (
        <div style={{display: 'flex'}}>
            <div style={{ margin: "auto", width: "100%", maxWidth: "800px", textAlign: "left" }}>
                <h1>Deudas y servicios</h1>
                <h2>Deuda técnica</h2>
                <h3>Deuda técnica solución</h3>
                <div>
                    {data.map((item) => (
                        <CheckListItem label={item}/>
                    ))}
                </div>
                <CheckListInput placeholder={"Descripción técnica de la solución"} action={append} onChange={handleChange} value={inputValue}/>
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