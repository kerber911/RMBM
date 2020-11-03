import React from 'react'
import { Theme } from '@material-ui/core/styles'
import { createStyles, Grid, Button, Typography, withStyles } from '@material-ui/core'
import { Translation } from 'react-i18next'

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
    <Grid className={classes.root}>
      <Grid>
        <Typography>{title}</Typography>
      </Grid>
      <Grid>
        <Typography>{subtitle}</Typography>
        <Typography variant="h6" className={classes.hint}>
          {hint}
        </Typography>
        <Grid>
          {type == 'r_move_into' || type == 'r_find_move' || type == 'r_landlord' ? (
            <Grid>
              <img className={classes.img} alt="complex" src={RoomIcon} />
              <Typography display="inline">Room</Typography>
            </Grid>
          ) : null}
          {type == 'b_with_ano' ? (
            <Grid>
              <img className={classes.img} alt="complex" src={SingleIcon} />
              <Typography display="inline">Single</Typography>
            </Grid>
          ) : null}
          <Grid>
            <img className={classes.img} alt="complex" src={SemiDetachedIcon} />
            <Typography display="inline">Semi detached</Typography>
          </Grid>
          {type == 'b_with_ano' ? (
            <Grid>
              <img className={classes.img} alt="complex" src={AnyHouseIcon} />
              <Typography display="inline">Any type of house</Typography>
            </Grid>
          ) : null}
          {type == 'r_move_into' || type == 'r_find_move' || type == 'r_landlord' || type == 'b_with_ano' ? (
            <Grid>
              <img className={classes.img} alt="complex" src={AppartmentIcon} />
              <Typography display="inline">Appartment</Typography>
            </Grid>
          ) : null}
          {type == 'r_move_into' || type == 'b_with_ano' ? (
            <Grid>
              <img className={classes.img} alt="complex" src={CondoIcon} />
              <Typography display="inline">Condo</Typography>
            </Grid>
          ) : null}
          {type == 'r_move_into' || type == 'r_find_move' || type == 'r_landlord' ? (
            <Grid>
              <img className={classes.img} alt="complex" src={SingleIcon} />
              <Typography display="inline">House</Typography>
            </Grid>
          ) : null}
          {type == 'r_find_move' ? (
            <Grid>
              <img className={classes.img} alt="complex" src={AnyIcon} />
              <Typography display="inline">Any</Typography>
            </Grid>
          ) : null}
        </Grid>
      </Grid>
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
    },
    hint: {
      color: theme.palette.text.hint
    }
  })
}

export default withStyles(styles, { name: 'MuiREType' })(REType)
