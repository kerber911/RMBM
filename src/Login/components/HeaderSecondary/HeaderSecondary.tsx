import React from 'react'
import { Theme, withStyles } from '@material-ui/core/styles'
import { createStyles, Grid, Button, Typography } from '@material-ui/core'
import { Translation } from 'react-i18next'
import Roof from '../../../header_back.png'
import MenuIcon from '@material-ui/icons/Menu'
import { Link } from 'react-router-dom'

export interface HeaderSecondaryComponent {
  classes?: any
  text?: string
  title?: string
  color?: string
}

const HeaderSecondary = (props: HeaderSecondaryComponent) => {
  const { classes, text, title, color } = props
  return (
    <Grid className={classes.root} style={{ backgroundImage: `url(${Roof})`, backgroundColor: `${color}` }}>
      <Grid className={classes.titleSpace}>
        <Grid item className={classes.title}>
          <Typography variant="h1">{title !== '' ? title : ''}</Typography>
        </Grid>
        <Grid item component={Link} to={'/profile'}>
          <MenuIcon className={classes.profile} />
        </Grid>
      </Grid>
    </Grid>
  )
}

const styles = (theme: Theme) => {
  return createStyles({
    root: {
      backgroundPosition: 'center bottom',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% 40%',
      height:'25vH'
    },
    logo: {
      height: '150px'
    },
    titleSpace: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(21),
      height: theme.spacing(7),
      display: 'flex',
      justifyContent: 'center',
      flexGrow: 1
    },
    title: {
      flexGrow: 1,
      paddingLeft: theme.spacing(9)
    },
    titleRow: {
      paddingBottom: theme.spacing(10)
    },
    secondTitle: {
      paddingBottom: '48px',
      color: theme.palette.primary.main,
      fontSize: '20px',
      marginTop: theme.spacing(-4)
    },
    profile: {
      color: theme.palette.text.secondary,
      height: theme.spacing(7),
      width: theme.spacing(7),
      paddingRight: theme.spacing(2)
    }
  })
}

export default withStyles(styles, { name: 'MuiHeaderSecondary' })(HeaderSecondary)
