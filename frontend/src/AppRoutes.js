import React from 'react'
import HomePage from './pages/Home/HomePage'
import { Route, Routes } from 'react-router-dom'

export default function AppRoutes() {
  return (
    <Routes>
        <Route path="/" element={<HomePage/>}></Route>
    </Routes>

  )
}
