import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import RegisterPage from './components/RegisterPage.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './components/HomePage.jsx'
import Join from './components/Join.jsx'
import Routien from './components/Routien.jsx'
import Final from './components/Final.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<HomePage />} />
        <Route path='/' element={<RegisterPage/>}/>
        <Route path='/join' element={<Join/>}/>
        <Route path='/routien' element={<Routien/>} />
        <Route path='/final' element={<Final/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
