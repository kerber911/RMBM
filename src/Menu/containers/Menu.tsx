import React from 'react'
import { Theme } from '@material-ui/core/styles'
import { createStyles, Grid, Button, Typography, withStyles } from '@material-ui/core'
import { Translation } from 'react-i18next'
import { ThunkDispatch } from 'redux-thunk'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import MenuTitle from '../components/MenuTitle/MenuTitle'
import RentIcon from '../../icon_rent.png'
import BuyIcon from '../../icon_buy.png'
import { Link } from 'react-router-dom'

class Menu extends React.Component<any> {
  render() {
    const { classes } = this.props
    return (
      <Grid container className={classes.root}>
        <Grid item className={classes.option}>
          <MenuTitle title={'Rent'} subtitle={'Matching'} icon={RentIcon} />
        </Grid>
        <Grid item className={classes.option}>
          <MenuTitle title={'Buy'} subtitle={'Matching'} icon={BuyIcon} />
        </Grid>
      </Grid>
    )
  }
}

const styles = (theme: Theme) => {
  return createStyles({
    root: {
      height: '50%'
    },
    option: {
      width: '50%'
    }
  })
}

const mapStateToProps = (dispatch: ThunkDispatch<{}, {}, any>) => {
  return {}
}

const mapDispathToProps = () => {
  return {}
}

export default withStyles(styles, { name: 'MuiMenu' })(Menu) //connect (mapStateToProps,mapDispathToProps)
