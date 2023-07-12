import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './globals/index.css'
import '@fontsource/titillium-web/200.css';
import '@fontsource/titillium-web/300.css';
import '@fontsource/titillium-web/400.css';
import '@fontsource/titillium-web/600.css';
import '@fontsource/titillium-web/700.css';
import '@fontsource/titillium-web/900.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)
