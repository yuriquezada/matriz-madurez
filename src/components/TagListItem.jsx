import React from 'react';
import "../style/CheckBox.css";

function TagListItem({label, onRemove}) {

    return (
        <div>
            <label class="pure-material-checkbox">
               {label}
            </label>
            <span onClick={onRemove}>
                &times;
            </span>
        </div>

    );
}

export default TagListItem;