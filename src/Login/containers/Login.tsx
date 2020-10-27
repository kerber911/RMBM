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
import Header from '../components/Header/Header'
import RadioButtonChecked from '@material-ui/icons/RadioButtonChecked'
import RadioButtonUnchecked from '@material-ui/icons/RadioButtonUnchecked'

const styles = (theme: Theme) => {
  return createStyles({
    keepSignin: {
      backgroundColor: theme.palette.primary.dark,
      width: '100%',
      justifyContent: 'center',
      margin: '0'
    },
    link: {
      fontSize: '12px',
      color: theme.palette.secondary.main,
      paddingBottom: theme.spacing(1),
      paddingTop: theme.spacing(1)
    }
  })
}

export interface ILogin {
  classes?: any
  text?: string
}

//type StyleProps = {} //& WithStyles<typeof styles>

class Login extends React.Component<ILogin, any> {
  render() {
    const { classes } = this.props
    return (
      <div>
        <Header />
        <Signup />
        <LoginVia />
        <Typography className={classes.link}>Already have an account?</Typography>
        <FormControlLabel
          control={
            <Checkbox
              name="keep_signin"
              icon={<RadioButtonUnchecked />}
              checkedIcon={<RadioButtonChecked />}
              defaultChecked
              color="primary"
            />
          } //checked={}  onChange={}
          label="Keep me signed in"
          className={classes.keepSignin}
        />
        {/* <LoginForm /> */}
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
