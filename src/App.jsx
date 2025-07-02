/**
 * Smart Fertilizer App - Main Application Component
 * 
 * @description Core application component handling routing and layout
 * @author DevAAR (Amil Abdullazada)
 * @version 1.0.0
 * @repository https://github.com/UserAAR/smart-fertilizer
 * @portfolio https://amil.rf.gd
 * 
 * Features:
 * - AI-powered plant analysis
 * - Smart chatbot assistant  
 * - Modern responsive UI
 * 
 * Crafted by DevAAR 🚀
 */

import { Routes, Route } from 'react-router-dom'
import './App.css'

// Import pages
import HomePage from './components/HomePage'
import PlantAnalysis from './pages/PlantAnalysis'
import ChatBot from './pages/ChatBot'

function App() {
  return (
    <div className="App min-h-screen bg-white transition-colors duration-300">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/plant-analysis" element={<PlantAnalysis />} />
        <Route path="/chatbot" element={<ChatBot />} />
      </Routes>
    </div>
  )
}

export default App
