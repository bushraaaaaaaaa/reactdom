import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Signup from './pages/signup'
import Login from './pages/login'

function App() {
  return (
    <>
      <h1>hello</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App