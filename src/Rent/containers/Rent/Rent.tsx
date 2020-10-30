import React from 'react'
import { Theme } from '@material-ui/core/styles'
import { createStyles, Grid, Button, Typography, withStyles } from '@material-ui/core'
import { Translation } from 'react-i18next'
import { ThunkDispatch } from 'redux-thunk'
import { connect } from 'react-redux'
import OptionsBlock from '../../../core/components/OptionsBlock/OptionsBlock'
import HeaderSecondary from '../../../Login/components/HeaderSecondary'
import NextButton from '../../../core/components/NextButton/NextButton'
import BackButton from '../../../core/components/BackButton/BackButton'

class Rent extends React.Component<any> {
  render() {
    const { classes } = this.props
    return (
      <Grid>
        <HeaderSecondary title={'Rent'} color={`#F7931E`} />
        <Grid className={classes.root}>
          <OptionsBlock MenuItem={false} icon={'Rent1'} ItemText={'Looking to move someone into my current place'} />
          <OptionsBlock MenuItem={false} icon={'Rent2'} ItemText={'To find someone to move into a new place with'} />
          <OptionsBlock MenuItem={false} icon={'Rent3'} ItemText={"I'm a landlord looking for a tenant"} />
          <NextButton type={'rent'} />
          <BackButton type={'rent'} />
        </Grid>
      </Grid>
    )
  }
}

const styles = (theme: any) => {
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
