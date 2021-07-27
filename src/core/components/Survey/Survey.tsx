import React from 'react'
import { Theme } from '@material-ui/core/styles'
import { createStyles, Grid, Button, Typography, withStyles } from '@material-ui/core'
import { Translation } from 'react-i18next'
import Carousel from 'react-material-ui-carousel'
import NextButton from '../NextButton/NextButton'
import BackButton from '../BackButton/BackButton'
import SurveySlide from '../SurveySlide/SurveySlide'
import slides from './slides.json'

export interface SurveyComponent {
  classes?: any
  text?: string
  title?: string
  type?: string

}

const Survey = (props: SurveyComponent) => {
  const { classes, text } = props
  return (
    <Grid>
      <Grid className={classes.root}>
        {/* <Location />
        <REType /> */}
        <Carousel animation="slide" autoPlay={false} swipe={false}>
          {slides.map((slides, i) => (
            <SurveySlide
              key={i}
              header=""
              title={slides.title}
              subtitle={slides.subtitle}
              hint={slides.hint}
              minValue={slides.minValue}
              maxValue={slides.maxValue}
              Icon={slides.image}
            />
          ))
          }
        </Carousel>
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
    },
    header: {
      border: '1px solid' + theme.palette.text.primary
    }
  })
}

export default withStyles(styles, { name: 'MuiSurvey' })(Survey)
