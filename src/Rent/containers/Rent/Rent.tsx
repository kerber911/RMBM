import React from 'react'
import { Theme } from '@material-ui/core/styles'
import { createStyles, Grid, Button, Typography, withStyles } from '@material-ui/core'
import { Translation } from 'react-i18next'
import { ThunkDispatch } from 'redux-thunk'
import { connect } from 'react-redux'
import RentType from '../../components/RentType'
class Rent extends React.Component {
  render() {
    return (
      <div>
        <RentType />
      </div>
    )
  }
}

const styles = (theme: Theme) => {
  createStyles({
    root: {
      background: 'white'
    }
  })
}

export default withStyles(styles, { name: 'MuiRent' })(Rent) //connect (mapStateToProps,mapDispathToProps)
