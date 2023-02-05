import React from "react";
import "../style/VerticalStepper.css";

export default function StepItem({id, name, status}) {
  return (
    <div className={status}>
      <div className="v-stepper">
        <div className="circle">{id}</div>
        <div className="line"></div>
      </div>
      <div className="content">{name}</div>
    </div>
  );
}
