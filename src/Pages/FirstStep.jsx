import * as React from "react";
import { useState } from "react"
import VerticalStepper from "../components/VerticalStepper";
import { Link } from "react-router-dom";
import Select from "../components/Select";
import { architectArray, projectArray } from "../data/firstStep";
import "../style/Form.css";
// import Input from '../components/Input';
import TextArea from "../components/TextArea";
import CheckBox from "../components/CheckBox";

export const FirstStep = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <div>
      <div style={{ display: "flex" }}>
        <div style={{ margin: "auto", maxWidth: "800px", textAlign: "left" }}>
          <h2>Datos de la aplicación</h2>
          <h3>Datos principales</h3>
          <form className="form-inputs">
            <Select label={"Aplicación"} options={projectArray} />
            <Select label={"Proyecto"} options={projectArray} />
            <Select label={"Arquitecto"} options={architectArray} />
          </form>
          <form className="form-inputs">
            <TextArea label={"Descripción técnica de la solución"} />
            <TextArea label={"Objetivos del proyecto"} />
          </form>
          <h3>Usuarios</h3>
          <form className="form-users">
            <CheckBox
              checked={checked}
              onChange={handleChange}
              label={"Internos"}
            />
            {/* <CheckBox label={"Externos"} />
            <CheckBox label={"Aplicación   "} /> */}
          </form>
          {/* */}
          {checked && (
            <div>
              <h4 style={{ marginBottom: ".5rem" }}>Internos</h4>
              <form className="form-inputs">
                <TextArea label={"Descripción técnica de la solución"} />
                <TextArea label={"Objetivos del proyecto"} />
              </form>
            </div>
          )}
          <div>
            <h4 style={{ marginBottom: ".5rem" }}>Externos</h4>
            <form className="form-inputs">
              <TextArea label={"Descripción técnica de la solución"} />
              <TextArea label={"Objetivos del proyecto"} />
            </form>
          </div>
          <Link to="/">
            <button>Regresar</button>
          </Link>
          <Link to="/step2">
            <button>Continuar</button>
          </Link>
        </div>
        <VerticalStepper step={1} />
      </div>
    </div>
  );
};
