import React from 'react'
import { Button } from '@mui/material'
import { Link } from "react-router-dom";

import { Amplify } from 'aws-amplify';
import awsExports from '../aws-exports';

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

Amplify.configure(awsExports)

const Home = () => {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <div>
            <h1>Matriz de madurez</h1>
            <h2>Hello {user.username}</h2>
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
        </main>
      )}
    </Authenticator>
  )
}
export default Home