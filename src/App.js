import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import GuestRoute from './routes/GuestRoute'
import Home from './pages/home'
import SignIn from './pages/SignIn';
import theme from './theme'
import './mock';
import store from './store';
import Auth from './components/Auth';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Auth>
            <Routes>
              <Route path="/" element={<Home />} />
              <GuestRoute path="/sign-in" element={<SignIn />} />
              <Route path="*" element={<h1>ERROR 404!</h1>} />
            </Routes>
          </Auth>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  )
}

export default App;
