import { ThemeProvider } from '@mui/material/styles';
import theme from './UI/Theme';

import './App.css';

import { Routes, Route } from "react-router-dom";

import { ThirdStep } from './Pages/ThirdStep';
import { WelcomePage } from "./Pages/WelcomePage";
import { FirstStep } from './Pages/FirstStep';
import { SecondStep } from './Pages/SecondStep';


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Routes>
          <Route path="/" element={<WelcomePage/>} />
          <Route path="/step1" element={<FirstStep/>} />
          <Route path="/step2" element={<SecondStep/>} />
          <Route path="/step3" element={<ThirdStep/>} />
        </Routes>
      </div>
    </ThemeProvider>

  );
}

export default App;
