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
import RentIcon from './../../../icons/pricerange.svg'
import MusicIcon from './../../../icons/music.svg'
import BedIcon from './../../../icons/bed.svg'
import SmokingIcon from './../../../icons/smoking.svg'
import AccessIcon from './../../../icons/accessable.svg'
import ElevatorIcon from './../../../icons/lift.svg'

const Images = [BathIcon, DogIcon, CalendarIcon, FamilyIcon, GrassIcon, RangeIcon, SocialIcon, RentIcon, MusicIcon, BedIcon, SmokingIcon, AccessIcon, ElevatorIcon]

export interface SurveySlideComponent {
  classes?: any
  header?: string
  title: string
  type?: string
  subtitle: string
  hint?: string
  minValue: number
  maxValue: number
  step?: number
  minValueText?: string
  maxValueText?: string
  Icon: number
}

function valuetext(value: number) {
  return `${value}`
}



const SurveySlide = (props: SurveySlideComponent) => {
  const { classes, header, title, subtitle, hint, minValue, maxValue, step, Icon } = props
    let midValue = Math.round(maxValue / 2)
  return (
    <Grid>
      <Grid className={classes.header}>
        <Typography>{header}</Typography>
      </Grid>
      <Grid container direction="column" className={classes.root}>
        <div>
          <Typography variant="h5">{title}</Typography>
          <Typography variant="h3" className={classes.subtitle}>
            {subtitle}
          </Typography>
        </div>
        <div>
          <img className={classes.img} alt="" src={Images[Icon]} />
        </div>
        <div className={classes.container}>
          <Slider
            defaultValue={midValue}
            getAriaValueText={valuetext}
            // onChange={}
            aria-labelledby="discrete-slider"
            valueLabelDisplay="auto"
            step={step}
            marks
            min={minValue}
            max={maxValue}
          />
          {<Typography display="inline" variant="h6" className={classes.subtitle}></Typography>}
          <Typography display="inline" variant="h6" className={classes.hint}>{hint}</Typography>
        </div>
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
      height: '48vh',
      border: '1px solid' + theme.palette.text.disabled,
      padding: '1vW',
      display: 'flex'
    },
    img: {
      height: '20vh',
      marginBottom: theme.spacing(1)
    },
    header: {
      alignItems: 'left'
    },
    subtitle:{
      marginBottom: theme.spacing(1)
    },
    hint:{
      color: theme.palette.text.disabled
    },
    container:{
      alignItems:'flex-end'
    }
  })
}

export default withStyles(styles, { name: 'MuiSurveySlide' })(SurveySlide)
