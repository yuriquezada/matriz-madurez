import React from 'react';
import "../style/CheckBox.css";

function CheckBox({onChange, checked, label}) {

    return (
        <label class="pure-material-checkbox">
            <input onChange={onChange} checked={checked}
               type="checkbox"/>
            <span>{label}</span>
        </label>
    );
}

export default CheckBox;