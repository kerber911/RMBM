import React from 'react'
import Login from './Login/containers/Login'
import Main from './Main/containers/Main'
import logo from './logo.svg'
import './App.css'
import { ThemeProvider } from '@material-ui/styles'
import theme from './theme'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Rent from './Rent/containers/Rent'
import Buy from './Buy/containers/Buy'
import Profile from './Profile/containers/Profile'
import Result from './Reslut/containers/Result'
import Chat from './Chat/containers/Chat'
import i18n from './core/translation/i18n'
import { I18nextProvider } from 'react-i18next'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <I18nextProvider i18n={i18n}>
          <div className="App">
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/login/loginform" component={Login} />
              <Route exact path="/login/two_step" component={Login} />
              <Route exact path="/login/two_step_second" component={Login} />
              <Route exact path="/main" component={Main} />
              <Route exact path="/rent" component={Rent} />
              <Route exact path="/rent/location" component={Rent} />
              <Route exact path="/rent/estate" component={Rent} />
              <Route exact path="/rent/survey" component={Rent} />
              <Route exact path="/buy" component={Buy} />
              <Route exact path="/buy/location" component={Buy} />
              <Route exact path="/buy/estate" component={Buy} />
              <Route exact path="/buy/survey" component={Buy} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/result" component={Result} />
              <Route exact path="/chat" component={Chat} />
            </Switch>
          </div>
        </I18nextProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}

{
  /* <Route
exact
path="/login"
render={() => (
  <>
    <Route path={'login'} component={Login} exact />
    <Route path={`login/loginform`} component={LoginForm} exact />
    <Route path={`login/2-step`} component={TwoStep} exact />
  </>
)} */
}

export default App
