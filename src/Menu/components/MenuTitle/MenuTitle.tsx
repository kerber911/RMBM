import React from 'react'
import { Theme, withStyles } from '@material-ui/core/styles'
import { createStyles, Grid, Button, Typography } from '@material-ui/core'
import { Translation } from 'react-i18next'

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
        <Typography variant="h2">{title}</Typography>
      </Grid>
      <Grid item className={classes.subtitle}>
        <Typography variant="h5">{subtitle}</Typography>
      </Grid>
    </Grid>
  )
}

const styles = (theme: Theme) => {
  return createStyles({
    itemIcon: {
      backgroundPosition: 'center bottom',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '70% auto'
    },
    title: {},
    subtitle: {
      paddingBottom: theme.spacing(28)
    }
  })
}

export default withStyles(styles, { name: 'MuiMenuTitle' })(MenuTitle)
