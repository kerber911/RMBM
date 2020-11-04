import React from 'react'
import { Theme } from '@material-ui/core/styles'
import { createStyles, Grid, Button, Typography, withStyles } from '@material-ui/core'
import Slider from '@material-ui/core/Slider'
import { Translation } from 'react-i18next'

import BathIcon from './../../../icons/bath.svg'
import DogIcon from './../../../icons/dog.svg'
import CalendarIcon from './../../../icons/calendar.svg'
import FamilyIcon from './../../../icons/family.svg'
import GrassIcon from './../../../icons/grass.svg'
import RangeIcon from './../../../icons/pricerange.svg'
import SocialIcon from './../../../icons/social.svg'

export interface SurveySlideComponent {
  classes?: any
  text?: string
  title?: string
  type?: string
  subtitle?: string
  hint?: string
  minValue?: number
  maxValue?: number
}

function valuetext(value: number) {
  return `${value}`
}

const SurveySlide = (props: SurveySlideComponent) => {
  const { classes, text, title, subtitle, hint, minValue, maxValue } = props
  return (
    <Grid>
      <Grid className={classes.header}>
        <Typography>{title}</Typography>
      </Grid>
      <Grid className={classes.root}>
        <Typography>{subtitle}</Typography>
        <Typography variant="h6" className={classes.hint}>
          {hint}
        </Typography>
        <img className={classes.img} alt="" /> {/*src={Icon}*/}
        <Slider
          defaultValue={1}
          getAriaValueText={valuetext}
          aria-labelledby="discrete-slider"
          valueLabelDisplay="auto"
          step={1}
          marks
          min={0}
          max={2}
        />
        <Typography display="inline"></Typography>
      </Grid>
    </Grid>
  )
}

const styles = (theme: any) => {
  return createStyles({
    root: {
      justifyContent: 'center',
      paddingLeft: '5%',
      paddingRight: '5%',
      flex: 1,
      flexGrow: 1,
      height: '40vh',
      border: '1px solid' + theme.palette.text.primary,
      marginBottom: '15%',
      padding: '1vW'
    },
    img: {
      height: '20vh'
    },
    header: {
      alignItems: 'left'
    }
  })
}

export default withStyles(styles, { name: 'MuiSurveySlide' })(SurveySlide)
