import * as React from 'react';
import '../style/VerticalStepper.css';

export default function VerticalLinearStepper() {

  return (
        <div class="vertical-stepper">
            <div class="step completed">
              <div class="v-stepper">
                <div class="circle"></div>
                <div class="line"></div>
              </div>

              <div class="content">
                Paso 1
              </div>
          </div>
          
          <div class="step active">
            <div class="v-stepper">
              <div class="circle"></div>
              <div class="line"></div>
            </div>

            <div class="content">
              Paso 2
            </div>
          </div>
          
          <div class="step empty">
              <div class="v-stepper">
                <div class="circle"></div>
                <div class="line"></div>
              </div>

              <div class="content">
                Paso 3
              </div>
          </div>
          
          <div class="step">
              <div class="v-stepper">
                <div class="circle"></div>
                <div class="line"></div>
              </div>

              <div class="content">
                Paso 4
              </div>
          </div>
          
        </div>
  );
}
