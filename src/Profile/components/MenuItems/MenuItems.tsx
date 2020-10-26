import React from 'react'
import { Theme, withStyles } from '@material-ui/core/styles'
import { createStyles, Grid, Button, Typography } from '@material-ui/core'
import { Translation } from 'react-i18next'
import OptionsBlock from '../../../core/components/OptionsBlock/OptionsBlock'

export interface MenuItemsComponent {
  classes?: any
  text?: string
}

const MenuItems = (props: MenuItemsComponent) => {
  const { classes, text } = props
  return (
    <Grid container>
      <OptionsBlock />
      <OptionsBlock />
      <OptionsBlock />
      <OptionsBlock />
      <OptionsBlock />
      <OptionsBlock />
      <OptionsBlock />
      <OptionsBlock />
    </Grid>
  )
}

const styles = (theme: Theme) => createStyles({})

export default withStyles(styles, { name: 'MuiMenuItems' })(MenuItems)
