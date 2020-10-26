import React from 'react'
import { Theme, withStyles } from '@material-ui/core/styles'
import { createStyles, Grid, Button, Typography } from '@material-ui/core'
import { Translation } from 'react-i18next'

export interface OptionsBlockComponent {
  classes?: any
  text?: string
  ItemText?: string
  MenuItem?: boolean
}

const OptionsBlock = (props: OptionsBlockComponent) => {
  const { classes, text, ItemText, MenuItem } = props
  return (
    <Grid container className={classes.itemDetail} direction="row" alignItems="center" justify="space-between">
      <Grid item xs={12} className={classes.itemIcon} style={{ backgroundImage: 'url(${})' }}>
        <Grid>
          <Typography display="inline">
            {/*show text if its Menu Title text */}
            {MenuItem === true ? ItemText : ''}
          </Typography>
          <Typography display="inline">
            {/*show text if its common text */}
            {MenuItem === true ? '' : ItemText}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}

const styles = (theme: Theme) =>
  createStyles({
    itemDetail: {
      border: '1px solid' + theme.palette.primary.main
    },
    itemIcon: {
      backgroundPosition: 'left center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '20% auto'
    }
  })

export default withStyles(styles, { name: 'MuiOptionsBlock' })(OptionsBlock)
