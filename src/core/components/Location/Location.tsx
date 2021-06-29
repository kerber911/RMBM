import React from 'react'
import { Theme } from '@material-ui/core/styles'
import { createStyles, Grid, Button, Typography, withStyles } from '@material-ui/core'
import { Translation } from 'react-i18next'
import NextButton from '../NextButton/NextButton'
import BackButton from '../BackButton/BackButton'
import MenuIcon from '@material-ui/icons/Menu'
import { Link } from 'react-router-dom'

export interface LocationComponent {
  classes?: any
  text?: string
  title?: string
  type?: string
}

const Location = (props: LocationComponent) => {
  const { classes, text, title, type } = props
  return (
    <Translation>
    {(t, { i18n }) => (
    <Grid>
      <Grid className={classes.root}>
      <Grid className={classes.titleSpace}>
              <Grid item className={classes.title}>
                <Typography variant="h5">{t('__location.title')} </Typography>
              </Grid>
              <Grid item component={Link} to={'/profile'}>
                <MenuIcon className={classes.profile} />
              </Grid>
            </Grid>
      </Grid>
    </Grid>
      )}
      </Translation>
  )
}

const styles = (theme: any) => {
  return createStyles({
    root: {
      justifyContent: 'center',
      paddingLeft: '5%',
      paddingRight: '5%'
    },    
    titleSpace: {
      border: '1px solid' + theme.palette.text.primary,
      height: theme.spacing(7),
      alignItems: 'center',
      display: 'flex',
      flexGrow: 1
    },
    title: {
      flexGrow: 1,
      paddingLeft: theme.spacing(2),
      color: theme.palette.text.primary,
      textAlign: 'left'
    },
    profile: {
      color: theme.palette.primary.main,
      height: theme.spacing(7),
      width: theme.spacing(7),
      paddingRight: theme.spacing(2)
    }
  })
}

export default withStyles(styles, { name: 'MuiLocation' })(Location)
