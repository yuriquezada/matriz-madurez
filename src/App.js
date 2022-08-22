import { ThemeProvider } from '@mui/material/styles';
import theme from './UI/Theme';

import './App.css';
import { WelcomePage } from "./Pages/WelcomePage";
import { FirstStep } from './Pages/FirstStep';
import { SecondStep } from './Pages/SecondStep';

import { Routes, Route } from "react-router-dom";



const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Routes>
          <Route path="/" element={<WelcomePage/>} />
          <Route path="/step1" element={<FirstStep/>} />
          <Route path="/step2" element={<SecondStep/>} />
        </Routes> 
      </div>
    </ThemeProvider>

  );
}

export default App;
