import React from 'react'
import { Theme } from '@material-ui/core/styles'
import { createStyles, Grid, Button, Typography, withStyles } from '@material-ui/core'
import { Translation } from 'react-i18next'
import { ThunkDispatch } from 'redux-thunk'
import { connect } from 'react-redux'

class Buy extends React.Component {
  render() {
    return <div></div>
  }
}

const styles = (theme: Theme) => {
  createStyles({
    root: {
      background: 'white'
    }
  })
}

export default withStyles(styles, { name: 'MuiBuy' })(Buy) //connect (mapStateToProps,mapDispathToProps)
