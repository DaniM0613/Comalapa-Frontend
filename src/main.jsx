import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AppRouter from './router'
import StoreContextProvider from './context/StoreContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StoreContextProvider> 
       <AppRouter/>
    </StoreContextProvider>
    
  </React.StrictMode>,
)
