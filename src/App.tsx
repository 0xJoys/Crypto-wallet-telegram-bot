import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css'
import SplashPage from './pages/splashPage'
import CreateDeal from './pages/createDealPage';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<SplashPage />} />
        <Route path="/createDeal" element={<CreateDeal />} />
      </Routes>
    </>
  )
}

export default App
