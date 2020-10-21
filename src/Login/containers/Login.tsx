import React from 'react'
import { Theme } from '@material-ui/core/styles'
import { createStyles, Grid, Button, Typography, withStyles } from '@material-ui/core'
import { Translation } from 'react-i18next'
import Signup from './../components/Signup/Signup'
import LoginVia from '../components/LoginVia/LoginVia'
import { ReactComponent } from '*.svg'
import { couldStartTrivia } from 'typescript'
import { ThunkDispatch } from 'redux-thunk'
import { connect } from 'react-redux'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'

const styles = (theme: Theme) => {
  createStyles({
    root: {
      background: 'white'
    }
  })
}

//type StyleProps = {} //& WithStyles<typeof styles>

class Login extends React.Component {
  render() {
    return (
      <div>
        <Signup />
        <LoginVia />
        <a>Already have an account?</a>
        <FormControlLabel
          control={<Checkbox name="keep_signin" />} //checked={}  onChange={}
          label="Keep me signed in"
        />
        {/*<Login /> */}
      </div>
    )
  }
}

const mapStateToProps = (dispatch: ThunkDispatch<{}, {}, any>) => {
  return {}
}

const mapDispathToProps = () => {
  return {}
}

export default withStyles(styles, { name: 'Muilogin' })(Login) //connect (mapStateToProps,mapDispathToProps)
