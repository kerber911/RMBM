import React from 'react'
import { Theme, withStyles } from '@material-ui/core/styles'
import { createStyles, Grid, Button, Typography } from '@material-ui/core'
import { Translation } from 'react-i18next'
import TextField from '@material-ui/core/TextField'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'

export interface SignupComponent {
  classes?: any
  text?: string
}

const Signup = (props: SignupComponent) => {
  const { classes, text } = props
  return (
    <Grid container className={classes.root}>
      <Grid item>
        <label htmlFor="">Signup</label>
      </Grid>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          InputProps={{ disableUnderline: true, className: classes.inputField }}
          id="fullname-signup"
          label="Your full name"
        />
        <TextField
          InputProps={{ disableUnderline: true, className: classes.inputField }}
          id="email-signup"
          label="Your email"
        />
        <TextField
          InputProps={{ disableUnderline: true, className: classes.inputField }}
          id="password-signup"
          label="Your Password"
        />
        <TextField
          InputProps={{ disableUnderline: true, className: classes.inputField }}
          id="password_rep-signup"
          label="Repeat Password"
        />
      </form>

      <FormControlLabel
        control={<Checkbox name="terms_condi" />} //checked={}  onChange={}
        label="I have read and accept terms and conditions"
      />
      <Button variant="contained" className={classes.button}>
        Continue
      </Button>
    </Grid>
  )
}

const styles = (theme: Theme) =>
  createStyles({
    inputField: {
      borderBottom: '1px solid' + theme.palette.primary.main
    },
    root: {
      alignItems: 'center'
    },
    button: {
      alignItems: 'center',
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.text.secondary,
      width: '100%',
      marginBottom: theme.spacing(2),
      marginTop: theme.spacing(4)
    }
  })

export default withStyles(styles, { name: 'MuiSingup' })(Signup)
