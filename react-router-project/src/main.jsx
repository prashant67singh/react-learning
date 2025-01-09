import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './componets/Home.jsx'
import About from './componets/About.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}>
        
          <Route path='' element={<Home></Home>}></Route>
          <Route path='about' element={<About/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
