// App.js
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Options from './components/Options'
import Selection from './components/Selection'

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path='/' element={<Options />} />
          <Route path='/selection/:step/:option' element={<Selection />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
