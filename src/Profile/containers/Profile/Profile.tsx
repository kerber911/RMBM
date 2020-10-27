import React from 'react'
import { Theme } from '@material-ui/core/styles'
import { createStyles, Grid, Button, Typography, withStyles } from '@material-ui/core'
import { Translation } from 'react-i18next'
import { ThunkDispatch } from 'redux-thunk'
import { connect } from 'react-redux'
import OptionsBlock from '../../../core/components/OptionsBlock/OptionsBlock'
import PersonIcon from '@material-ui/icons/Person'

class Profile extends React.Component<any> {
  render() {
    const { classes } = this.props
    return (
      <Grid className={classes.root}>
        <Grid item className={classes.header}>
          My Menu
        </Grid>
        <OptionsBlock MenuItem={true} ItemText={'Edit My Profile'} />
        <OptionsBlock MenuItem={true} ItemText={'Messages'} />
        <OptionsBlock MenuItem={true} ItemText={'My Matches'} />
        <OptionsBlock MenuItem={true} ItemText={'Legal Contract'} />
        <OptionsBlock MenuItem={true} ItemText={'Movig Service'} />
        <OptionsBlock MenuItem={true} ItemText={'Paiting / Reno '} />
        <OptionsBlock MenuItem={true} ItemText={'Real-estate Agent'} />
        <OptionsBlock MenuItem={true} ItemText={'FAQ'} />
        <OptionsBlock MenuItem={true} ItemText={'Contact Suuport'} />
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

export default withStyles(styles, { name: 'MuiProfile' })(Profile) //connect (mapStateToProps,mapDispathToProps)
