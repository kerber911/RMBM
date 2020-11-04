import React from 'react'
import { Theme } from '@material-ui/core/styles'
import { createStyles, Grid, Button, Typography, withStyles } from '@material-ui/core'
import { Translation } from 'react-i18next'
import NextButton from '../NextButton/NextButton'
import BackButton from '../BackButton/BackButton'
import SurveySlide from '../SurveySlide/SurveySlide'

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
      <Grid className={classes.root}>
        {/* <Location />
        <REType /> */}
        <SurveySlide />
      </Grid>
      <NextButton type={'rent'} />
      <BackButton type={'rent'} />
    </Grid>
  )
}

const styles = (theme: any) => {
  return createStyles({
    root: {
      justifyContent: 'center',
      paddingLeft: '5%',
      paddingRight: '5%',
      minHeight: '25vh'
    },
    header: {
      border: '1px solid' + theme.palette.text.primary
    }
  })
}

const SurveyList = [
  {
    name: '',
    title: '',
    subtitle: '',
    hint: '',
    maxValue: '',
    minValue: '',
    icon: ''
  },
  {
    name: '',
    title: '',
    subtitle: '',
    hint: '',
    maxValue: '',
    minValue: '',
    icon: ''
  },
  {
    name: '',
    title: '',
    subtitle: '',
    hint: '',
    maxValue: '',
    minValue: '',
    icon: ''
  }
]

export default withStyles(styles, { name: 'MuiSurvey' })(Survey)
