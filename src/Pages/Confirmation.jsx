import * as React from 'react';
import VerticalStepper from '../components/VerticalStepper';

export const Confirmation = () => {

    return (
        <div style={{display: 'flex'}}>
            <div style={{ margin: "auto", width: "100%", maxWidth: "800px", textAlign: "left" }}>
                <h1>Gracias</h1>

            </div>
            <VerticalStepper step={2}/>
        </div>
    )
}