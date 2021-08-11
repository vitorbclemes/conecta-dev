import { ThemeProvider } from '@material-ui/core/styles';
import React from 'react'
import Home from './pages/home'
import theme from './theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  )
}

export default App;
