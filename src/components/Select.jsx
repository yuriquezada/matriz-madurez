import React from 'react';
import '../style/Select.css';

function Select(props) {
    const options = props.options;
    const listOptions = options.map((option) =>
      <option key={option.toString()}>
        {option}
      </option>
    );
    return (
        <div class="select">
            <select class="select-text" required>
                <option value="" disabled selected></option>
                {listOptions}
            </select>
            <span class="select-highlight"></span>
            <span class="select-bar"></span>
            <label class="select-label">{props.label}</label>
        </div>
    );
}

export default Select;