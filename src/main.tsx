import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import "./my-utils/i18n"; // Import du fichier de configuration


import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <BrowserRouter>
    <App />
  </BrowserRouter>
  </StrictMode>,
)
