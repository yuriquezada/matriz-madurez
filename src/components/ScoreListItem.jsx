import React from 'react';
import "../style/ScoreListItem.css";

function ScoreListItem({label}) {

    return (
        <div className='scorelistitem'>
            <label>
               {label}
            </label>
            <input name="myInput" className='input__score' />
        </div>
    );
}

export default ScoreListItem;