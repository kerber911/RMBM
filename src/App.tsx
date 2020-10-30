import React from 'react'
import Login from './Login/containers/Login'
import Main from './Main/containers/Main'
import logo from './logo.svg'
import './App.css'
import { ThemeProvider } from '@material-ui/styles'
import theme from './theme'
import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router-dom'
import Rent from './Rent/containers/Rent'
import Buy from './Buy/containers/Buy'
import Profile from './Profile/containers/Profile'
import Result from './Reslut/containers/Result'
import Chat from './Chat/containers/Chat'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/main" component={Main} />
            <Route exact path="/rent" component={Rent} />
            <Route exact path="/buy" component={Buy} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/result" component={Result} />
            <Route exact path="/chat" component={Chat} />
          </Switch>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
