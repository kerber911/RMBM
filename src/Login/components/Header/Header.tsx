import React from 'react'
import { Theme, withStyles } from '@material-ui/core/styles'
import { createStyles, Grid, Button, Typography } from '@material-ui/core'
import { Translation } from 'react-i18next'
import RMBMLogo from '../../../RMBMlogo.png'

export interface HeaderComponent {
  classes?: any
  text?: string
}

const Header = (props: HeaderComponent) => {
  const { classes, text } = props
  return (
    <Grid className={classes.root}>
      <div className={classes.logoSpace}>
        <img src={RMBMLogo} className={classes.logo} alt="" />
      </div>
      <Grid container className={classes.titleRow}>
      <Grid item xs={6}>
      <label className={classes.title}>Rent Match</label>
      </Grid>
      <Grid item xs={6}>
      <label className={classes.title}>Buy Match</label>
      </Grid>
      </Grid>
      <Grid item  xs={12} className={classes.secondTitle}>
        <label>Signup</label>
      </Grid>
    </Grid>
  )
}

const styles = (theme: Theme) => {
  return createStyles({
    root: {
      backgroundColor: theme.palette.secondary.main
    },
    logo: {
      height: '150px'
    },
    logoSpace: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(1)
    },
    title: {
        color: theme.palette.text.secondary,
        fontSize: '20px',
      },
    titleRow: {
        paddingBottom: theme.spacing(10)
      },
    secondTitle: {
      paddingBottom: '48px',
      color: theme.palette.primary.main,
      fontSize: '20px',
      marginTop: theme.spacing(-4)
    }
  })
}

export default withStyles(styles, { name: 'MuiHeader' })(Header)
