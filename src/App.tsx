import React from 'react'
import Login from './Login/containers/Login'
import logo from './logo.svg'
import './App.css'
import { ThemeProvider } from '@material-ui/styles'
import theme from './theme'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
     <Login />
    </div>
    </ThemeProvider>
  )
}

export default App
