import './App.css';

import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import { FirstStep } from './Pages/FirstStep';
import { SecondStep } from './Pages/SecondStep';
import Header from './components/Header';

import { Authenticator } from '@aws-amplify/ui-react';


const App = () => {
  return (
      <Authenticator>
        {({ signOut, user }) => (
          <div className="App">
            <Header/>
            <button onClick={signOut}>Sign out</button>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/step1" element={<FirstStep/>} />
              <Route path="/step2" element={<SecondStep/>} />
            </Routes>
          </div>
        )}
      </Authenticator>
  );
}

export default App;
