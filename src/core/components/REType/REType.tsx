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
}

const REType = (props: RETypeComponent) => {
  const { classes, type } = props
  return (
    <Translation>
      {(t, { i18n }) => (
        <Grid>
          <Grid className={classes.cover}>
            <Typography>{t(`__realestate.${type}_title`)}</Typography>
          </Grid>
          <Grid className={classes.root}>
            <Grid className={classes.content}>
              <Grid className={classes.subtitleText}>
                <Typography>{t(`__realestate.${type}_subtitle`)}</Typography>
              </Grid>
              <Grid>
                <Typography className={classes.hintText}>{t(`__realestate.${type}_hint`)}</Typography>
              </Grid>
              <Grid className={classes.itemDetail}>
                {type === 'r_move_into' || type === 'r_find_move' || type === 'r_landlord' ? (
                  <Grid>
                    <img className={classes.img} alt="complex" src={RoomIcon} />
                    <Typography display="inline">{t('__realestate.room')}</Typography>
                  </Grid>
                ) : null}
                {type === 'b_with_ano' ? (
                  <Grid className={classes.itemDetail}>
                    <img className={classes.img} alt="complex" src={SingleIcon} />
                    <Typography display="inline">{t('__realestate.single')}</Typography>
                  </Grid>
                ) : null}
                {type === 'b_with_ano' ? (
                  <Grid className={classes.itemDetail}>
                    <img className={classes.img} alt="complex" src={SemiDetachedIcon} />
                    <Typography display="inline">{t('__realestate.semi')}</Typography>
                  </Grid>
                ) : null}
                {type === 'b_with_ano' ? (
                  <Grid className={classes.itemDetail}>
                    <img className={classes.img} alt="complex" src={AnyHouseIcon} />
                    <Typography display="inline">{t('__realestate.anytype')}</Typography>
                  </Grid>
                ) : null}
                {type === 'r_move_into' || type === 'r_find_move' || type === 'r_landlord' || type === 'b_with_ano' ? (
                  <Grid className={classes.itemDetail}>
                    <img className={classes.img} alt="complex" src={AppartmentIcon} />
                    <Typography display="inline">{t('__realestate.appartment')}</Typography>
                  </Grid>
                ) : null}
                {type === 'r_move_into' || type === 'b_with_ano' ? (
                  <Grid className={classes.itemDetail}>
                    <img className={classes.img} alt="complex" src={CondoIcon} />
                    <Typography display="inline">{t('__realestate.condo')}</Typography>
                  </Grid>
                ) : null}
                {type === 'r_move_into' || type === 'r_find_move' || type === 'r_landlord' ? (
                  <Grid className={classes.itemDetail}>
                    <img className={classes.img} alt="complex" src={SingleIcon} />
                    <Typography display="inline">{t('__realestate.house')}</Typography>
                  </Grid>
                ) : null}
                {type === 'r_find_move' ? (
                  <Grid className={classes.itemDetail}>
                    <img className={classes.img} alt="complex" src={AnyIcon} />
                    <Typography display="inline">{t('__realestate.any')}</Typography>
                  </Grid>
                ) : null}
              </Grid>
            </Grid>
          </Grid>
          {type != null && type.charAt(0) === 'r' ? (
            <div>
              <NextButton type={'rent'} />
              <BackButton type={'rent'} />
            </div>
          ) : (
            <div>
              <Grid>
                <NextButton type={'buy'} />
              </Grid>
              <Grid>
                <BackButton type={'buy'} />
              </Grid>
            </div>
          )}
        </Grid>
      )}
    </Translation>
  )
}

const styles = (theme: any) => {
  return createStyles({
    root: {
      paddingLeft: '5%',
      paddingRight: '5%',
      flex: 1,
      flexGrow: 1,
      height: '40vh',
      border: '1px solid' + theme.palette.text.primary,
      marginBottom: '5vh',
      marginTop: '1vW',
      padding: '1vW'
    },
    img: {
      width: theme.spacing(4),
      marginRight: theme.spacing(4)
    },
    itemDetail: {
      textAlign: 'left',
      verticalAlign: 'center',
      marginTop: theme.spacing(2),
      flexWrap: 'inherit',
      flex: 1,
      height: theme.spacing(5)
    },
    hintText: {
      textAlign: 'left',
      color: 'gray',
      fontSize: '1rem'
    },
    subtitleText: {
      textAlign: 'left',
      paddingBottom: theme.spacing(0.5)
    },
    cover: {
      marginTop: theme.spacing(-2)
    }
  })
}

export default withStyles(styles, { name: 'MuiREType' })(REType)
