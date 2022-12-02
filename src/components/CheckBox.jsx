import React, {useState} from 'react';
import "../style/CheckBox.css";

function CheckBox(props) {

    return (
        <label class="pure-material-checkbox">
            <input onChange={props.onChange} checked={props.checked}
               type="checkbox"/>
            <span>{props.label}</span>
        </label>
    );
}

export default CheckBox;