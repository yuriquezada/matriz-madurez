import React from 'react';
import "../style/CheckBox.css";
// import { useState } from "react"

function CheckListInput({placeholder, action, onChange, value}) {
    return (
        <div>
            <button type="submit" className="btn btn-primary" onClick={action}>+</button>
            <input type="text" id="listItem" placeholder={placeholder} className="form-control" onChange={onChange} value={value}/>
        </div>
    );
}

export default CheckListInput;