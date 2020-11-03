import React from 'react'
import { Theme } from '@material-ui/core/styles'
import { createStyles, Grid, Typography, withStyles } from '@material-ui/core'
import { Translation } from 'react-i18next'
import Signup from './../components/Signup/Signup'
import LoginVia from '../components/LoginVia/LoginVia'
import TwoStep from '../components/TwoStep/TwoStep'
import TwoStepSecond from '../components/TwoStepSecond/TwoStepSecond'
import { couldStartTrivia } from 'typescript'
import { ThunkDispatch } from 'redux-thunk'
import { connect } from 'react-redux'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Header from '../components/Header/Header'
import LoginForm from '../components/LoginForm/LoginForm'
import RadioButtonChecked from '@material-ui/icons/RadioButtonChecked'
import RadioButtonUnchecked from '@material-ui/icons/RadioButtonUnchecked'
import { Route, Link, Switch, withRouter, RouteComponentProps } from 'react-router-dom'

const styles = (theme: Theme) => {
  return createStyles({
    keepSignin: {
      backgroundColor: theme.palette.primary.dark,
      width: '100%',
      justifyContent: 'center',
      margin: '0'
    },
    link: {
      color: theme.palette.secondary.main,
      paddingBottom: theme.spacing(1),
      paddingTop: theme.spacing(1),
      textDecoration: 'none'
    },
    fillSpace: {
      display: 'flex',
      minHeight: '100vh',
      flexDirection: 'column'
    }
  })
}

interface Props extends RouteComponentProps {
  path: string
}

export interface ILogin {
  classes?: any
  text?: string
}

//type StyleProps = {} //& WithStyles<typeof styles>

class Login extends React.Component<ILogin, Props> {
  render() {
    const { classes } = this.props
    return (
      <Translation>
        {(t, { i18n }) => (
          <div>
            <Grid>
              <Switch>
                <Route
                  exact
                  path="/login"
                  component={() => (
                    <div className={classes.fillSpace}>
                      <Header title={'Sign up'} />
                      <Signup />
                      <LoginVia />
                      <Grid component={Link} to={'/login/loginform'} className={classes.link}>
                        <Typography variant="h6">{t('__login.haveaccount')}</Typography>
                      </Grid>
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
                        label={t('__login.keepsignin')}
                        className={classes.keepSignin}
                      />
                    </div>
                  )}
                ></Route>
                <Route exact path="/login/loginform" component={() => <LoginForm />}></Route>
                <Route
                  exact
                  path="/login/two_step"
                  component={() => (
                    <>
                      <Header title={'Verification'} />
                      <TwoStep />
                    </>
                  )}
                ></Route>
                <Route
                  exact
                  path="/login/two_step_second"
                  component={() => (
                    <div className={classes.fillSpace}>
                      <Header title={'Verification'} />
                      <TwoStepSecond />
                      <Grid className={classes.keepSignin}>
                        <Typography variant="h5">{t('__login.stillproblem')}</Typography>
                      </Grid>
                    </div>
                  )}
                ></Route>
              </Switch>
            </Grid>
          </div>
        )}
      </Translation>
    )
  }
}

const mapStateToProps = (dispatch: ThunkDispatch<{}, {}, any>) => {
  return {}
}

const mapDispathToProps = () => {
  return {}
}

export default withRouter(withStyles(styles, { name: 'Muilogin' })(Login) as any) as any //connect (mapStateToProps,mapDispathToProps)
