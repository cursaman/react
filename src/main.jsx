import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.jsx'
//import Day01 from './pages/day01/Day01.jsx'
import Day02 from './pages/day02/Day02.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Day02 /> 
  </StrictMode>,
)
