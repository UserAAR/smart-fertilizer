/**
 * Smart Fertilizer - AI-Powered Agriculture Assistant
 * 
 * @description Main entry point for the Smart Fertilizer application
 * @author DevAAR (Amil Abdullazada)
 * @version 1.0.0
 * @repository https://github.com/UserAAR/smart-fertilizer
 * @portfolio https://amil.rf.gd
 * @license MIT
 * 
 * Developed with ❤️ by DevAAR
 */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
