import { StrictMode } from 'react'

// Modern React 18 API (not legacy ReactDOM.render)
// Enables concurrent features
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'


// document.getElementById('root')! tells TS the element exists
// Prevents type errors
createRoot(document.getElementById('root')!).render(

// StrictMode outer wrapper for development warnings
// BrowserRouter inner wrapper for routing
  <StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </StrictMode>,
)
