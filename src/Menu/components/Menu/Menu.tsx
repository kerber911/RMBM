import React from 'react'
import { Theme } from '@material-ui/core/styles'
import { createStyles, Grid, Button, Typography, withStyles } from '@material-ui/core'
import { Translation } from 'react-i18next'
import MenuTitle from '../MenuTitle/MenuTitle'
import RentIcon from '../../../icon_rent.png'
import BuyIcon from '../../../icon_buy.png'
import { Link } from 'react-router-dom'
import HeaderSecondary from '../../../Login/components/HeaderSecondary'

export interface MenuComponent {
  classes?: any
  text?: string
}

const Menu = (props: MenuComponent) => {
  const { classes, text } = props
  return (
    <Translation>
      {(t, { i18n }) => (
        <Grid>
          <HeaderSecondary color={`#B6A37C`} />
          <Grid container className={classes.root} >
            <Grid item className={classes.option} component={Link} to={'/rent'}>
              <MenuTitle title={t('__rent.title')} subtitle={t('__general.matching')} icon={RentIcon} />
            </Grid>
            <Grid item className={classes.option} component={Link} to={'/buy'}>
              <MenuTitle title={t('__buy.title')} subtitle={t('__general.matching')} icon={BuyIcon} type="buy"/>
            </Grid>
          </Grid>
        </Grid>
      )}
    </Translation>
  )
}

const styles = (theme: Theme) => {
  return createStyles({
    root: {
      height: '50%'
    },
    option: {
      width: '50%',
      textDecoration: 'none'
    }
  })
}

export default withStyles(styles, { name: 'MuiMenu' })(Menu)
