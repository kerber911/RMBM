import React from 'react'
import { Theme } from '@material-ui/core/styles'
import { createStyles, Grid, Button, Typography, withStyles } from '@material-ui/core'
import { Translation } from 'react-i18next'
import NextButton from '../NextButton/NextButton'
import BackButton from '../BackButton/BackButton'

import SingleIcon from './../../../icons/single.svg'
import CondoIcon from './../../../icons/condo.svg'
import AppartmentIcon from './../../../icons/appartment.svg'
import AnyHouseIcon from './../../../icons/anyHouse.svg'
import SemiDetachedIcon from './../../../icons/double.svg'
import RoomIcon from './../../../icons/bed.svg'
import AnyIcon from './../../../icons/anz.svg'

export interface RETypeComponent {
  classes?: any
  text?: string
  type?: string
  title?: string
  subtitle?: string
  hint?: string
}

const REType = (props: RETypeComponent) => {
  const { classes, text, title, type, subtitle, hint } = props
  return (
    <Translation>
      {(t, { i18n }) => (
        <Grid>
          <Grid className={classes.root}>
            <Grid>
              <Typography>{title}</Typography>
            </Grid>
            <Grid className={classes.content}>
              <Typography>{subtitle}</Typography>
              <Typography variant="h6" className={classes.hint}>
                {hint}
              </Typography>
              <Grid>
                {type === 'r_move_into' || type === 'r_find_move' || type === 'r_landlord' ? (
                  <Grid>
                    <img className={classes.img} alt="complex" src={RoomIcon} />
                    <Typography display="inline">{t('__realestate.room')}</Typography>
                  </Grid>
                ) : null}
                {type === 'b_with_ano' ? (
                  <Grid>
                    <img className={classes.img} alt="complex" src={SingleIcon} />
                    <Typography display="inline">{t('__realestate.single')}</Typography>
                  </Grid>
                ) : null}
                { type === 'b_with_ano' ? (
                <Grid>
                  <img className={classes.img} alt="complex" src={SemiDetachedIcon} />
                  <Typography display="inline">{t('__realestate.semi')}</Typography>
                </Grid>
                 ) : null}
                {type === 'b_with_ano' ? (
                  <Grid>
                    <img className={classes.img} alt="complex" src={AnyHouseIcon} />
                    <Typography display="inline">{t('__realestate.anytype')}</Typography>
                  </Grid>
                ) : null}
                {type === 'r_move_into' || type === 'r_find_move' || type === 'r_landlord' || type === 'b_with_ano' ? (
                  <Grid>
                    <img className={classes.img} alt="complex" src={AppartmentIcon} />
                    <Typography display="inline">{t('__realestate.appartment')}</Typography>
                  </Grid>
                ) : null}
                {type === 'r_move_into' || type === 'b_with_ano' ? (
                  <Grid>
                    <img className={classes.img} alt="complex" src={CondoIcon} />
                    <Typography display="inline">{t('__realestate.condo')}</Typography>
                  </Grid>
                ) : null}
                {type === 'r_move_into' || type === 'r_find_move' || type === 'r_landlord' ? (
                  <Grid>
                    <img className={classes.img} alt="complex" src={SingleIcon} />
                    <Typography display="inline">{t('__realestate.house')}</Typography>
                  </Grid>
                ) : null}
                {type === 'r_find_move' ? (
                  <Grid>
                    <img className={classes.img} alt="complex" src={AnyIcon} />
                    <Typography display="inline">{t('__realestate.any')}</Typography>
                  </Grid>
                ) : null}
              </Grid>
            </Grid>
          </Grid>
          <NextButton type={'rent'} />
          <BackButton type={'rent'} />
        </Grid>
      )}
    </Translation>
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
    hint: {
      color: theme.palette.text.hint
    },
    img: {
      width: theme.spacing(6),
    }
  })
}

export default withStyles(styles, { name: 'MuiREType' })(REType)
