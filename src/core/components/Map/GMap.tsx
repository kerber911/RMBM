import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { createStyles, Grid, Typography } from '@material-ui/core'
import { Translation } from 'react-i18next'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import classnames from 'classnames'
//import { } from "googlemaps";

export interface GMapComponent {
  classes?: any
  text?: string
  type?: string
}

const GMap = (props: GMapComponent) => {
  const { classes, text, type } = props
  return <Grid container></Grid>
}

const styles = (theme: any) => {
  return createStyles({})
}

export default withStyles(styles, { name: 'MuiGMap' })(GMap)
