import * as React from 'react';
import { useState } from "react"
import CheckListInput from './ChecklistInput';
import TagListItem from './TagListItem';

export const TagList = ({title, list, setList}) => {
    const [inputSolutionDebt, setInputSolutionDebt] = useState("");

    const handleChangeSolution = (event) => {
        setInputSolutionDebt(event.target.value);
    };

    const appendSolution = () => {
        setList([...list, inputSolutionDebt]);
        setInputSolutionDebt("")
    };

    const handleTagRemove = i => {
        let newTags = list.slice();
        newTags.splice(i, 1);
        setList(newTags);
    };
    
    return (
        <div style={{ margin: "auto", width: "100%", maxWidth: "400px", textAlign: "left" }}>
            <h3>{title}</h3>
            <CheckListInput placeholder={"Descripción técnica de la solución"} action={appendSolution} onChange={handleChangeSolution} value={inputSolutionDebt}/>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                {list.map((item, i) => (
                    <TagListItem
                        key={i}
                        label={item}
                        onRemove={() => handleTagRemove(i)}/>
                ))}
            </div>
            
        </div>
    )
}

export default TagList;