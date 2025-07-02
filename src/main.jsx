/**
 * Smart Fertilizer - AI-Powered Agriculture Assistant
 * 
 * @description Main entry point for the Smart Fertilizer application
 * @author Developer AAR
 * @version 1.0.0
 * @repository https://github.com/UserAAR/smart-fertilizer
 * @license MIT
 * 
 * Developed with ❤️ by AAR
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
