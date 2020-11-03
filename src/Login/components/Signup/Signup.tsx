import React from 'react'
import { Theme, withStyles } from '@material-ui/core/styles'
import { createStyles, Grid, Button, Typography } from '@material-ui/core'
import { Translation } from 'react-i18next'
import TextField from '@material-ui/core/TextField'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import RadioButtonChecked from '@material-ui/icons/RadioButtonChecked'
import RadioButtonUnchecked from '@material-ui/icons/RadioButtonUnchecked'
import InputAdornment from '@material-ui/core/InputAdornment'
import PersonIcon from '@material-ui/icons/Person'
import LockIcon from '@material-ui/icons/Lock'
import LockOpenIcon from '@material-ui/icons/LockOpen'
import MailIcon from '@material-ui/icons/Mail'
import { Link, withRouter, RouteComponentProps } from 'react-router-dom'

export interface SignupComponent extends RouteComponentProps {
  classes?: any
  text?: string
}

// this.state = {
//   password: '',
//   confirmPassword: ''
// }

// handleSubmit = () => {
//   const { password, confirmPassword } = this.state;
//   // perform all neccassary validations
//   if (password !== confirmPassword) {
//       alert("Passwords don't match");
//   } else {
//       // make API call
//   }
// }

const Signup = (props: SignupComponent) => {
  const { classes, text } = props
  return (
    <Translation>
      {(t, { i18n }) => (
        <>
          <Grid container className={classes.root}>
            <Grid item>
              <Typography variant="h5">
                <TextField
                  InputLabelProps={{
                    className: classes.inputField
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonIcon className={classes.inputIcon} />
                      </InputAdornment>
                    ),
                    disableUnderline: true,
                    required: true,
                    className: classes.inputField
                  }}
                  id="fullname-signup"
                  label={t('__signup.fullname')}
                />
              </Typography>
              <Typography variant="h5">
                <TextField
                  InputLabelProps={{
                    className: classes.inputField
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <MailIcon className={classes.inputIcon} />
                      </InputAdornment>
                    ),
                    disableUnderline: true,
                    required: true,
                    className: classes.inputField
                  }}
                  id="email-signup"
                  label={t('__signup.email')}
                />
              </Typography>
              <Typography variant="h5">
                <TextField
                  InputLabelProps={{
                    className: classes.inputField
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockIcon className={classes.inputIcon} />
                      </InputAdornment>
                    ),
                    disableUnderline: true,
                    required: true,
                    type: 'password',
                    className: classes.inputField
                  }}
                  id="password-signup"
                  label={t('__signup.password')}
                />
              </Typography>
              <Typography variant="h5">
                <TextField
                  InputLabelProps={{
                    className: classes.inputField
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockOpenIcon className={classes.inputIcon} />
                      </InputAdornment>
                    ),
                    disableUnderline: true,
                    required: true,
                    type: 'password',
                    className: classes.inputField
                  }}
                  id="password_rep-signup"
                  label={t('__signup.repeatpassword')}
                />
              </Typography>
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<RadioButtonUnchecked />}
                    checkedIcon={<RadioButtonChecked />}
                    color="primary"
                    name="terms_condi"
                  />
                } //checked={}  onChange={}
                label={t('__signup.termsandconditions')}
              />
            </Grid>
            <Button
              variant="contained"
              className={classes.button}
              onClick={() => props.history.push('/login/two_step')}
            >
              {t('__general.continue')}
            </Button>
          </Grid>
        </>
      )}
    </Translation>
  )
}

const styles = (theme: Theme) =>
  createStyles({
    inputField: {
      borderBottom: '1px solid' + theme.palette.primary.main,
      color: theme.palette.text.primary
    },
    root: {
      justifyContent: 'center',
      paddingLeft: '5%',
      paddingRight: '5%'
    },
    button: {
      alignItems: 'center',
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.text.secondary,
      width: '100%',
      marginBottom: theme.spacing(2),
      marginTop: theme.spacing(4)
    },
    inputIcon: {
      color: theme.palette.primary.main,
      width: theme.spacing(3),
      height: theme.spacing(3)
    }
  })

export default withRouter(withStyles(styles, { name: 'MuiSingup' })(Signup) as any)
