import React from 'react'
import { Theme } from '@material-ui/core/styles'
import { createStyles, Grid, Button, Typography, withStyles } from '@material-ui/core'
import { Translation } from 'react-i18next'
import { ThunkDispatch } from 'redux-thunk'
import { connect } from 'react-redux'
import OptionsBlock from '../../../core/components/OptionsBlock/OptionsBlock'

class Rent extends React.Component<any> {
  render() {
    const { classes } = this.props
    return (
      <Grid className={classes.root}>
        <Grid item className={classes.header}>
          RENT
        </Grid>
        <OptionsBlock MenuItem={false} ItemText={'Looking to move someone into my current place'} />
        <OptionsBlock MenuItem={false} ItemText={'To find someone to move into a new place with'} />
        <OptionsBlock MenuItem={false} ItemText={"I'm a landlord looking for a tenant"} />
        <OptionsBlock MenuItem={true} ItemText={'Back'} />
      </Grid>
    )
  }
}

const styles = (theme: Theme) => {
  return createStyles({
    root: {
      justifyContent: 'center',
      paddingLeft: '5%',
      paddingRight: '5%'
    },
    header: {
      border: '1px solid' + theme.palette.text.primary
    }
  })
}

export default withStyles(styles, { name: 'MuiRent' })(Rent) //connect (mapStateToProps,mapDispathToProps)
