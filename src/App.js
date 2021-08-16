import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import GuestRoute from './routes/GuestRoute'
import Home from './pages/home'
import SignIn from './pages/SignIn';
import theme from './theme'

import './mock';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <GuestRoute path="/sign-in" element={<SignIn />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App;
