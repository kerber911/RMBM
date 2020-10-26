import React from 'react'
import { Theme, withStyles } from '@material-ui/core/styles'
import { createStyles, Grid, Button, Typography } from '@material-ui/core'
import { Translation } from 'react-i18next'
import RMBMLogo from '../../../RMBMlogo.png'

export interface LoginFormComponent {
  classes?: any
  text?: string
}

const LoginForm = (props: LoginFormComponent) => {
  const { classes, text } = props
  return <Grid className={classes.root}></Grid>
}

const styles = (theme: Theme) => {
  return createStyles({})
}

export default withStyles(styles, { name: 'MuiLoginForm' })(LoginForm)
