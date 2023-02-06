import './App.css';

import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import { FirstStep } from './Pages/FirstStep';
import { SecondStep } from './Pages/SecondStep';
import { ThirdStep } from './Pages/ThirdStep';
import { FourthStep } from './Pages/FourthStep';
import { FiveStep } from './Pages/FiveStep';
import { Confirmation } from './Pages/Confirmation';

import Header from './components/Header';
import { Authenticator } from '@aws-amplify/ui-react';




const App = () => {
  return (
      <Authenticator>
        {({ signOut, user }) => (
          <div className="App">
            <Header action={signOut}/>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/step1" element={<FirstStep/>} />
              <Route path="/step2" element={<SecondStep/>} />
              <Route path="/step3" element={<ThirdStep/>} />
              <Route path="/step4" element={<FourthStep/>} />
              <Route path="/step5" element={<FiveStep/>} />
              <Route path="/confirmation" element={<Confirmation/>} />
            </Routes>
          </div>
        )}
      </Authenticator>
  );
}

export default App;
