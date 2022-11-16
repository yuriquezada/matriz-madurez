import * as React from 'react';
import '../style/VerticalStepper.css';

export default function VerticalLinearStepper() {

  return (
        <div className="vertical-stepper">
            <div className="step completed">
              <div className="v-stepper">
                <div className="circle"></div>
                <div className="line"></div>
              </div>

              <div className="content">
                Datos de la aplicación
              </div>
          </div>
          
          <div className="step active">
            <div className="v-stepper">
              <div className="circle"></div>
              <div className="line"></div>
            </div>

            <div className="content">
              Deudas y servicios
            </div>
          </div>
          
          <div className="step empty">
              <div className="v-stepper">
                <div className="circle"></div>
                <div className="line"></div>
              </div>

              <div className="content">
                Integraciones y base de datos
              </div>
          </div>
          
          <div className="step">
              <div className="v-stepper">
                <div className="circle"></div>
                <div className="line"></div>
              </div>

              <div className="content">
                Matriz de madurez
              </div>
          </div>
          <div className="step">
              <div className="v-stepper">
                <div className="circle"></div>
                <div className="line"></div>
              </div>

              <div className="content">
                Cloudificación
              </div>
          </div>
          
        </div>
  );
}
