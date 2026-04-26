import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import avatar from './images/avatar.png';
// import edit from './images/editbutton.png';
// import add from './images/addbutton.png"';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
