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

const allTypesUsers = [
  { name: "Internos", checked: false },
  { name: "Externos", checked: false },
  { name: "Aplicación", checked: false }
]

export const FirstStep = () => {
  const [typesUsers, setTypesUsers] = useState(allTypesUsers)

  const updateCheckStatus = index => {
    setTypesUsers(
      typesUsers.map((userType, currentIndex) =>
        currentIndex === index
          ? { ...userType, checked: !userType.checked }
          : userType
      )
    )
  }


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
            {typesUsers.map((userType, index) => (
                    <CheckBox
                      key={userType.name}
                      isChecked={userType.checked}
                      onChange={() => updateCheckStatus(index)}
                      label={userType.name}
                      index={index}
                    />
                  ))}
          </form>
          {typesUsers.filter(userType => userType.checked === true).map((userType) => (
              <div>
                <h4 style={{ marginBottom: ".5rem" }}>{userType.name}</h4>
                <form className="form-inputs">
                  <TextArea label={"Descripción técnica de la solución"} />
                  <TextArea label={"Objetivos del proyecto"} />
                </form>
              </div>
            ))
          }
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
