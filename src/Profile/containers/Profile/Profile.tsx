import React from 'react'
import { Theme } from '@material-ui/core/styles'
import { createStyles, Grid, Button, Typography, withStyles } from '@material-ui/core'
import { Translation } from 'react-i18next'
import { ThunkDispatch } from 'redux-thunk'
import { connect } from 'react-redux'
import OptionsBlock from '../../../core/components/OptionsBlock/OptionsBlock'
import MenuIcon from '@material-ui/icons/Menu'
import { Link } from 'react-router-dom'

class Profile extends React.Component<any> {
  render() {
    const { classes } = this.props
    return (
      <Translation>
        {(t, { i18n }) => (
          <Grid className={classes.root}>
            <Grid className={classes.titleSpace}>
              <Grid item className={classes.title}>
                <Typography variant="h5">{t('__profile.menu')} </Typography>
              </Grid>
              <Grid item component={Link} to={'/profile'}>
                <MenuIcon className={classes.profile} />
              </Grid>
            </Grid>
            <OptionsBlock MenuItem={true} icon={'Profile'} ItemText={t('__profile.editprofile')} />
            <OptionsBlock MenuItem={true} icon={'Message'} ItemText={t('__profile.messages')} />
            <OptionsBlock MenuItem={true} icon={'Matches'} ItemText={t('__profile.matches')} />
            <OptionsBlock MenuItem={true} icon={'Legal'} ItemText={t('__profile.legal')} />
            <OptionsBlock MenuItem={true} icon={'Movers'} ItemText={t('__profile.movers')} />
            <OptionsBlock MenuItem={true} icon={'Reno'} ItemText={t('__profile.painting')} />
            <OptionsBlock MenuItem={true} icon={'RealEstate'} ItemText={t('__profile.realestate')} />
            <OptionsBlock MenuItem={true} icon={'FAQ'} ItemText={t('__profile.faq')} />
            <OptionsBlock MenuItem={true} icon={'Support'} ItemText={t('__profile.settings')} />
          </Grid>
        )}
      </Translation>
    )
  }
}

const styles = (theme: Theme) => {
  return createStyles({
    root: {
      paddingLeft: '5%',
      paddingRight: '5%',
      paddingTop: '5%'
    },
    header: {
      border: '1px solid' + theme.palette.text.primary
    },
    titleSpace: {
      border: '1px solid' + theme.palette.text.primary,
      height: theme.spacing(7),
      alignItems: 'center',
      display: 'flex',
      flexGrow: 1
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
    }
  })
}

export default withStyles(styles, { name: 'MuiProfile' })(Profile) //connect (mapStateToProps,mapDispathToProps)
