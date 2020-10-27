import React from 'react'
import { Theme, withStyles } from '@material-ui/core/styles'
import { createStyles, Grid, Button, Typography } from '@material-ui/core'
import { Translation } from 'react-i18next'
import RMBMLogo from '../../../RMBMlogo.png'

export interface MenuTitleComponent {
  classes?: any
  text?: string
  title?: string
  subtitle?: string
  icon?: string
}

const MenuTitle = (props: MenuTitleComponent) => {
  const { classes, text, title, subtitle, icon } = props
  return (
    <Grid className={classes.itemIcon} style={{ backgroundImage: `url(${icon})` }}>
      <Grid item className={classes.title}>
        <Typography>{title}</Typography>
      </Grid>
      <Grid item className={classes.subtitle}>
        <Typography>{subtitle}</Typography>
      </Grid>
    </Grid>
  )
}

const styles = (theme: Theme) => {
  return createStyles({
    itemIcon: {
      backgroundPosition: 'center bottom',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '20% auto'
    },
    title: {},
    subtitle: {}
  })
}

export default withStyles(styles, { name: 'MuiMenuTitle' })(MenuTitle)
