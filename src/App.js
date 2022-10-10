import { ThemeProvider } from '@mui/material/styles';
import theme from './UI/Theme';

import './App.css';

import { Routes, Route } from "react-router-dom";

import { ThirdStep } from './Pages/ThirdStep';
import Home from "./Pages/Home";
import { FirstStep } from './Pages/FirstStep';
import { SecondStep } from './Pages/SecondStep';
import Header from './components/Header';

import { Authenticator } from '@aws-amplify/ui-react';


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Authenticator>
        {({ signOut, user }) => (
          <div className="App">
            <Header/>
            <button onClick={signOut}>Sign out</button>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/step1" element={<FirstStep/>} />
              <Route path="/step2" element={<SecondStep/>} />
              <Route path="/step3" element={<ThirdStep/>} />
            </Routes>
          </div>
        )}
      </Authenticator>

    </ThemeProvider>

  );
}

export default App;
