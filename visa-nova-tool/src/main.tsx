import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './nova-styles.css' // Import Visa Nova styles
import "@visa/nova-styles/base/core.css";
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
