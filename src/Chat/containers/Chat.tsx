import React from 'react'
import { Theme } from '@material-ui/core/styles'
import { createStyles, Grid, Button, Typography, withStyles } from '@material-ui/core'
import { Translation } from 'react-i18next'
import { ThunkDispatch } from 'redux-thunk'
import { connect } from 'react-redux'

class Chat extends React.Component<any> {
  render() {
    const { classes } = this.props
    return <div></div>
  }
}

const styles = (theme: any) => {
  return createStyles({})
}

export default withStyles(styles, { name: 'MuiChat' })(Chat) //connect (mapStateToProps,mapDispathToProps)
