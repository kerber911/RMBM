import React from 'react'
import { Theme, withStyles } from '@material-ui/core/styles'
import { createStyles, Grid, Button, Typography, ButtonBase } from '@material-ui/core'
import { Translation } from 'react-i18next'
import classnames from 'classnames'

export interface MenuTitleComponent {
  classes?: any
  text?: string
  title?: string
  subtitle?: string
  icon?: string
  type?: string
}

const MenuTitle = (props: MenuTitleComponent) => {
  const { classes, text, title, subtitle, icon, type } = props
  return (
    <Grid container direction="column"
    justify="center"
    alignItems="center"> 
      <Grid item className={classes.title}>
        <Typography variant="h2">{title}</Typography>
      </Grid>
      <Grid item className={classes.subtitle}>
        <Typography variant="h5">{subtitle}</Typography>
      </Grid>
      <Grid item className={classnames(classes.itemIcon,classes[`menu_${type}`])}>
      <ButtonBase><img src={icon} alt="img" width="50%"/></ButtonBase>
      </Grid>
    </Grid>
  )
}

const styles = (theme: Theme) => {
  return createStyles({
    itemIcon: {
    display:'flex'
    },
    title: {
    },
    subtitle: {
    },
    menu_buy: {
      paddingTop:'20%'
    }
  })
}

export default withStyles(styles, { name: 'MuiMenuTitle' })(MenuTitle)
