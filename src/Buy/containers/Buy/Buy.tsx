import React from 'react'
import { Theme } from '@material-ui/core/styles'
import { createStyles, Grid, Button, Typography, withStyles } from '@material-ui/core'
import { Translation } from 'react-i18next'
import { ThunkDispatch } from 'redux-thunk'
import { connect } from 'react-redux'
import OptionsBlock from '../../../core/components/OptionsBlock/OptionsBlock'
import HeaderSecondary from '../../../Login/components/HeaderSecondary'

class Buy extends React.Component<any> {
  render() {
    const { classes } = this.props
    return (
      <Grid>
        <HeaderSecondary title={'Buy'} color={`#49402F`} />
        <Grid className={classes.root}>
          <OptionsBlock MenuItem={false} ItemText={'A home with another person'} />
          <OptionsBlock MenuItem={false} ItemText={'An investment property'} />
          <OptionsBlock MenuItem={false} ItemText={'A commercial property'} />
          <OptionsBlock MenuItem={false} ItemText={'Cottage'} />
          <OptionsBlock MenuItem={false} ItemText={'Farm'} />
          <OptionsBlock MenuItem={true} ItemText={'Back'} />
        </Grid>
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

export default withStyles(styles, { name: 'MuiBuy' })(Buy) //connect (mapStateToProps,mapDispathToProps)
