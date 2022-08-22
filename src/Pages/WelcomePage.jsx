import React from 'react'
import Header from '../components/Header'
import { Button } from '@mui/material'
import { Link } from "react-router-dom";
export const WelcomePage = () => {
  return (
    <div>
       <Header/>
       <div>
            <h1>Matriz de madurez</h1>
            <ol>
                <li>Datos de la aplicación</li>
                <li>Evaluación de la matriz de madurez</li>
                <li>Deudas y servicios</li>
                <li>Arquitectura</li>
                <li>Evaluación de Cloudificacion</li>
            </ol>
            <Link to="/step1">
              <Button variant="contained" color="primary">
                Empezar
              </Button>
            </Link>
        </div>
    </div>
  )
}

// export default WelcomePage