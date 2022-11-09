import React from 'react';
import '../style/Select.css';
function Select() {
    return (
        <div class="select">
            <select class="select-text" required>
                <option value="" disabled selected></option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
            </select>
            <span class="select-highlight"></span>
            <span class="select-bar"></span>
            <label class="select-label">Select</label>
        </div>
    );
}

export default Select;