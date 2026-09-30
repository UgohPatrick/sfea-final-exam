import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Question25 from './assets/question25.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
    <Question25/>
  </StrictMode>,
)
