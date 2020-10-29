import React from 'react'
import { Theme, withStyles } from '@material-ui/core/styles'
import { createStyles, Grid } from '@material-ui/core'
import TwitterIcon from '@material-ui/icons/Twitter'
import FacebookIcon from '@material-ui/icons/Facebook'

export interface LoginViaComponent {
  classes?: any
  text?: string
}

const LoginVia = (props: LoginViaComponent) => {
  const { classes, text } = props
  return (
    <Grid>
      <TwitterIcon className={classes.loginIcon} color="primary" />
      <FacebookIcon className={classes.loginIcon} color="primary" />
    </Grid>
  )
}

const styles = (theme: Theme) =>
  createStyles({
    loginIcon: {
      borderRadius: '50%',
      border: '1px solid' + theme.palette.primary.main,
      padding: theme.spacing(2),
      marginRight: theme.spacing(2)
    }
  })

export default withStyles(styles, { name: 'MuiLoginVia' })(LoginVia)
