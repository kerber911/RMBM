import React from 'react'
import Login from './Login/containers/Login'
import Main from './Main/containers/Main'
import logo from './logo.svg'
import './App.css'
import { ThemeProvider } from '@material-ui/styles'
import theme from './theme'
import { BrowserRouter } from 'react-router-dom'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Login />
          <Main />
        </div>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
