import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import './index.css'
import Fruity from './fruity.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Fruity/>
    <App />
  </React.StrictMode>
)
