import React from 'react'
import { Theme, withStyles } from '@material-ui/core/styles'
import { createStyles, Grid, Button, Typography } from '@material-ui/core'
import { Translation } from 'react-i18next'
import TextField from '@material-ui/core/TextField'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import RadioButtonChecked from '@material-ui/icons/RadioButtonChecked'
import RadioButtonUnchecked from '@material-ui/icons/RadioButtonUnchecked'

export interface SignupComponent {
  classes?: any
  text?: string
}

const Signup = (props: SignupComponent) => {
  const { classes, text } = props
  return (
    <Grid container className={classes.root}>
      <Grid item  >
        <Typography variant="h5" >
          <TextField
            InputProps={{ disableUnderline: true, className: classes.inputField }}
            id="fullname-signup"
            label="Your full name"
          />
        </Typography>
        <Typography variant="h5">
          <TextField
            InputProps={{ disableUnderline: true, className: classes.inputField }}
            id="email-signup"
            label="Your email"
          />
        </Typography>
        <Typography variant="h5">
          <TextField
            InputProps={{ disableUnderline: true, className: classes.inputField }}
            id="password-signup"
            label="Your Password"
          />
        </Typography>
        <Typography variant="h5">
          <TextField
            InputProps={{ disableUnderline: true, className: classes.inputField }}
            id="password_rep-signup"
            label="Repeat Password"
          />
        </Typography>
        <FormControlLabel
        control={<Checkbox icon={<RadioButtonUnchecked />} checkedIcon={<RadioButtonChecked />} color="primary" name="terms_condi" />}//checked={}  onChange={}
        label="I have read and accept terms and conditions"
      />
      </Grid>
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
  })

export default withStyles(styles, { name: 'MuiSingup' })(Signup)
