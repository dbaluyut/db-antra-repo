import React from 'react'
import { ThemeProvider } from '@mui/material/styles'
import { Routes, Route } from 'react-router-dom'
import theme from './muiTheme/customMuiTheme'

import HomePage from './pages/HomePage'
import './App.scss'
import PortfolioPage from './pages/PortfolioPage'
import NavBar from './components/NavBar/Navbar'
import Footer from './components/Footer/Footer'
import ContactPage from './pages/ContactPage'
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <NavBar links={['Home', 'Portfolio', 'Contact']} />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/portfolio' element={<PortfolioPage />} />
          <Route path='/contact' element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
