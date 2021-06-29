import React from 'react'
import { Theme, withStyles } from '@material-ui/core/styles'
import { createStyles, Grid, Button, Typography } from '@material-ui/core'
import { Translation } from 'react-i18next'

import Rent1Icon from './../../../icons/rent1.svg'
import Rent2Icon from './../../../icons/rent2.svg'
import Rent3Icon from './../../../icons/rent3.svg'
import Buy1Icon from './../../../icons/buy1.svg'
import Buy2Icon from './../../../icons/buy2.svg'
import Buy3Icon from './../../../icons/buy3.svg'
import RealEstateIcon from './../../../icons/realestate.svg'
import MoversIcon from './../../../icons/movers.svg'
import LegalIcon from './../../../icons/legal.svg'
import RenoIcon from './../../../icons/reno.svg'
import MatchesIcon from './../../../icons/matches.svg'
import ProfileIcon from './../../../icons/profile.svg'
import MessageIcon from './../../../icons/msgs.svg'
import FAQIcon from './../../../icons/faq.svg'
import SupportIcon from './../../../icons/zupcanik.svg'

export interface OptionsBlockComponent {
  classes?: any
  text?: string
  ItemText?: string
  MenuItem?: boolean
  icon?: string
}

const OptionsBlock = (props: OptionsBlockComponent) => {
  const { classes, text, ItemText, MenuItem, icon } = props
  return (
    <Grid container className={classes.itemDetail} direction="row" alignItems="center">
      {icon === 'Rent1' ? (
        <img className={classes.img} alt="complex" src={Rent1Icon} />
      ) : icon === 'Rent2' ? (
        <img className={classes.img} alt="complex" src={Rent2Icon} />
      ) : icon === 'Rent3' ? (
        <img className={classes.img} alt="complex" src={Rent3Icon} />
      ) : icon === 'Buy1' ? (
        <img className={classes.img} alt="complex" src={Buy1Icon} />
      ) : icon === 'Buy2' ? (
        <img className={classes.img} alt="complex" src={Buy2Icon} />
      ) : icon === 'Buy3' ? (
        <img className={classes.img} alt="complex" src={Buy3Icon} />
      ) : icon === 'RealEstate' ? (
        <img className={classes.img} alt="complex" src={RealEstateIcon} />
      ) : icon === 'Movers' ? (
        <img className={classes.img} alt="complex" src={MoversIcon} />
      ) : icon === 'Legal' ? (
        <img className={classes.img} alt="complex" src={LegalIcon} />
      ) : icon === 'Reno' ? (
        <img className={classes.img} alt="complex" src={RenoIcon} />
      ) : icon === 'Matches' ? (
        <img className={classes.img} alt="complex" src={MatchesIcon} />
      ) : icon === 'Profile' ? (
        <img className={classes.img} alt="complex" src={ProfileIcon} />
      ) : icon === 'Message' ? (
        <img className={classes.img} alt="complex" src={MessageIcon} />
      ) : icon === 'FAQ' ? (
        <img className={classes.img} alt="complex" src={FAQIcon} />
      ) : icon === 'Support' ? (
        <img className={classes.img} alt="complex" src={SupportIcon} />
      ) : null}
      <Grid className={classes.text}>
        <Typography display="inline">
          {/*show text if its Menu Title text */}
          {MenuItem === true ? ItemText : ''}
        </Typography>
        <Typography variant="h5" display="inline">
          {/*show text if its common text */}
          {MenuItem === false ? ItemText : ''}
        </Typography>
      </Grid>
    </Grid>
  )
}

const styles = (theme: Theme) =>
  createStyles({
    itemDetail: {
      border: '1px solid' + theme.palette.primary.main,
      marginTop: theme.spacing(3),
      flexWrap: 'inherit',
      flex: 1,
      height: theme.spacing(10)
    },
    img: {
      width: theme.spacing(4),
      margin: theme.spacing(2)
    },
    text: {
      flexgrow: 1,
      textOverflow: 'ellipsis'
    }
  })

export default withStyles(styles, { name: 'MuiOptionsBlock' })(OptionsBlock)
