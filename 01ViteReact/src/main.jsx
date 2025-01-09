import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'



const reactEl = App();

const reactElement = React.createElement('a', { href: 'https://google.com', target: '_blank'}, "Hello Google")

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
     {/* reactEl
     App() */}

     {/* reactElement */}
  </StrictMode>,
)
