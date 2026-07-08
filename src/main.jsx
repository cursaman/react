import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import "./style/index.css";

//import App from './App.jsx'
//import Day01 from './pages/day01/Day01.jsx';
//import Day02 from './pages/day02/Day02.jsx';
//import Day03 from './pages/day03/Day03.jsx';
//import Day04 from './pages/day04/Day04.jsx';
//import Day05 from './pages/day05/Day05.jsx';
//import Day06 from './pages/day06/Day06.jsx';
import Day07 from './pages/day07/Day07.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Day07 /> 
  </StrictMode>,
)
