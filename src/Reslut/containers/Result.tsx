import React from 'react'
import { Theme } from '@material-ui/core/styles'
import { createStyles, Grid, Button, Typography, withStyles } from '@material-ui/core'
import { Translation } from 'react-i18next'
import { ThunkDispatch } from 'redux-thunk'
import { connect } from 'react-redux'
import OptionsBlock from '../../core/components/OptionsBlock/OptionsBlock'
import MenuIcon from '@material-ui/icons/Menu'
import { Link } from 'react-router-dom'

class Result extends React.Component<any> {
  render() {
    const { classes } = this.props
    return (
      <Grid className={classes.root}>
        <Grid className={classes.titleSpace}>
          <Grid item className={classes.title}>
            <Typography variant="h5">Your Matches: </Typography>
          </Grid>
          <Grid item component={Link} to={'/profile'}>
            <MenuIcon className={classes.profile} />
          </Grid>
        </Grid>
        <Grid className={classes.matches}>
          <OptionsBlock MenuItem={true} icon={'Profile'} ItemText={'Deki'} />
          <OptionsBlock MenuItem={true} icon={'Profile'} ItemText={'Johnson'} />
          <OptionsBlock MenuItem={true} icon={'Profile'} ItemText={'Grooya'} />
        </Grid>
        <Grid className={classes.titleSpace}>
          <Grid item className={classes.title}>
            <Typography variant="h5">You will also need: </Typography>
          </Grid>
        </Grid>
        <OptionsBlock MenuItem={true} icon={'Legal'} ItemText={'Legal Contract'} />
        <OptionsBlock MenuItem={true} icon={'Movers'} ItemText={'Movig Service'} />
        <OptionsBlock MenuItem={true} icon={'Reno'} ItemText={'Paiting / Reno '} />
        <OptionsBlock MenuItem={true} icon={'RealEstate'} ItemText={'Real-estate Agent'} />
      </Grid>
    )
  }
}

const styles = (theme: any) => {
  return createStyles({
    root: {
      paddingLeft: '5%',
      paddingRight: '5%'
    },
    titleSpace: {
      border: '1px solid' + theme.palette.text.primary,
      height: theme.spacing(7),
      alignItems: 'center',
      display: 'flex',
      flexGrow: 1,
      marginTop: '5%'
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
    },
    matches: {
      marginBottom: theme.spacing(8)
    }
  })
}

export default withStyles(styles, { name: 'MuiResult' })(Result) //connect (mapStateToProps,mapDispathToProps)
