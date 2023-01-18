import * as React from 'react';
import { useState } from "react"
import CheckListInput from '../components/ChecklistInput';
import CheckListItem from '../components/ChecklistItem';

export const CheckList = ({title, list, setList}) => {
    const [inputSolutionDebt, setInputSolutionDebt] = useState("");

    const handleChangeSolution = (event) => {
        setInputSolutionDebt(event.target.value);
    };

    const appendSolution = () => {
        setList([...list, inputSolutionDebt]);
        setInputSolutionDebt("")
    };
    
    return (
        <div style={{ margin: "auto", width: "100%", maxWidth: "400px", textAlign: "left" }}>
            <h3>{title}</h3>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                {list.map((item) => (
                    <CheckListItem label={item}/>
                ))}
            </div>
            <CheckListInput placeholder={"Descripción técnica de la solución"} action={appendSolution} onChange={handleChangeSolution} value={inputSolutionDebt}/>
        </div>
    )
}

export default CheckList;