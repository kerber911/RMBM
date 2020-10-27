import React from 'react'
import { Theme } from '@material-ui/core/styles'
import { createStyles, Grid, Button, Typography, withStyles } from '@material-ui/core'
import { Translation } from 'react-i18next'
import { ThunkDispatch } from 'redux-thunk'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import Rent from '../../Rent/containers/Rent'
import Buy from '../../Buy/containers/Buy'
import Profile from '../../Profile/containers/Profile'
import Menu from '../../Menu/containers/Menu'

class Main extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Menu} />
          <Route exact path="/rent" component={Rent} />
          <Route exact path="/buy" component={Buy} />
          <Route exact path="/profile" component={Profile} />
        </Switch>
      </div>
    )
  }
}

const styles = (theme: Theme) => {
  createStyles({
    root: {
      background: 'white'
    }
  })
}

const mapStateToProps = (dispatch: ThunkDispatch<{}, {}, any>) => {
  return {}
}

const mapDispathToProps = () => {
  return {}
}

export default withStyles(styles, { name: 'MuiMain' })(Main) //connect (mapStateToProps,mapDispathToProps)
