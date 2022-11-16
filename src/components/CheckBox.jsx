import React from 'react';
import "../style/CheckBox.css";

function CheckBox(props) {
    return (
        <label class="pure-material-checkbox">
            <input checked={props.checked}
              onChange={props.handleChange} type="checkbox"/>
            <span>{props.label}</span>
        </label>
    );
}

export default CheckBox;