import React from 'react'
import { Theme, withStyles } from '@material-ui/core/styles'
import { createStyles, Grid, Button, Typography } from '@material-ui/core'
import { Translation } from 'react-i18next'
import Checkbox from '@material-ui/core/Checkbox'
import Header from './../Header/Header'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import RadioButtonChecked from '@material-ui/icons/RadioButtonChecked'
import RadioButtonUnchecked from '@material-ui/icons/RadioButtonUnchecked'
import TextField from '@material-ui/core/TextField'
import MailIcon from '@material-ui/icons/Mail'
import LockIcon from '@material-ui/icons/Lock'
import InputAdornment from '@material-ui/core/InputAdornment'

export interface LoginFormComponent {
  classes?: any
  text?: string
}

const LoginForm = (props: LoginFormComponent) => {
  const { classes, text } = props
  return (
    <Translation>
      {(t, { i18n }) => (
        <Grid className={classes.root}>
          <Header title={'Log in'} />
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
              id="email-login"
              label={t('__login.email')}
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
              id="password-login"
              label={t('__login.password')}
            />
          </Typography>
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
        </Grid>
      )}
    </Translation>
  )
}

const styles = (theme: Theme) => {
  return createStyles({
    inputField: {
      borderBottom: '1px solid' + theme.palette.primary.main,
      color: theme.palette.text.primary
    },
    inputIcon: {
      color: theme.palette.primary.main,
      width: theme.spacing(3),
      height: theme.spacing(3)
    },
    keepSignin: {
      marginTop: theme.spacing(3),
      backgroundColor: theme.palette.primary.dark,
      width: '100%',
      justifyContent: 'center',
      margin: '0'
    }
  })
}

export default withStyles(styles, { name: 'MuiLoginForm' })(LoginForm)
