import * as React from "react";
import "../style/App.css";
import "../style/VerticalStepper.css";
import StepItem from "./StepItem";

const steps = [
  {
    id: 1,
    name: "Datos de la aplicación",
    status: "empty",
  },
  {
    id: 2,
    name: "Deudas y servicios",
    status: "empty",
  },
  {
    id: 3,
    name: "Integraciones y base de datos",
    status: "empty",
  },
  {
    id: 4,
    name: "Matriz de madurez",
    status: "empty",
  },
  {
    id: 5,
    name: "Cloudificación",
    status: "empty",
  },
];

export default function VerticalLinearStepper({ numberStep }) {
  return (
    <div className="vertical-stepper bg-grey-20">
      
      {steps.map((elem) => {
        if (elem.id < numberStep) {
          return (<StepItem id={"✓"} name={elem.name} status={"step completed"} />);
        }
        else if (elem.id === numberStep) {
          return (<StepItem id={elem.id} name={elem.name} status={"step active"} />);
        }
        else {
          return (<StepItem id={elem.id} name={elem.name} status={"step empty"} />);
        }
      })}
    </div>
  );
}
