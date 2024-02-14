import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/home'
import './style/style.css'
import TestOnly from './pages/testOnly'
import Home2 from './pages/home2'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <TestOnly /> */}
    <Home2 />

  </React.StrictMode>,
)
