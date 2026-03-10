import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Resources from './pages/Resources'
import Announcements from './pages/Announcements'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/announcements" element={<Announcements />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
