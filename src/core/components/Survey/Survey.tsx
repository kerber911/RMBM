import React from 'react'
import { Theme } from '@material-ui/core/styles'
import { createStyles, Grid, Button, Typography, withStyles } from '@material-ui/core'
import { Translation } from 'react-i18next'
import NextButton from '../NextButton/NextButton'
import BackButton from '../BackButton/BackButton'

export interface SurveyComponent {
  classes?: any
  text?: string
  title?: string
  type?: string
}

const Survey = (props: SurveyComponent) => {
  const { classes, text, title, type } = props
  return (
    <Grid>
      <Grid className={classes.root}></Grid>
    </Grid>
  )
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

export default withStyles(styles, { name: 'MuiSurvey' })(Survey)
