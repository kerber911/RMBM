import React from 'react'
import { Theme } from '@material-ui/core/styles'
import { createStyles, Grid, Button, Typography, withStyles } from '@material-ui/core'
import { Translation } from 'react-i18next'
import { ThunkDispatch } from 'redux-thunk'
import { connect } from 'react-redux'
import Menu from '../../Menu/components/Menu/Menu'

class Main extends React.Component {
  render() {
    return (
      <div>
        <Menu />
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

const mapStateToProps = (dispatch: ThunkDispatch<{}, {}, any>) => {
  return {}
}

const mapDispathToProps = () => {
  return {}
}

export default withStyles(styles, { name: 'MuiMain' })(Main) //connect (mapStateToProps,mapDispathToProps)
