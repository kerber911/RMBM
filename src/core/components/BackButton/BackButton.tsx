import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { createStyles, Grid, Typography } from '@material-ui/core'
import { Translation } from 'react-i18next'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import classnames from 'classnames'
//import BrowserHistory from 'react-router/lib/BrowserHistory'

export interface BackButtonComponent {
  classes?: any
  text?: string
  type?: string
}

const BackButton = (props: BackButtonComponent) => {
  const { classes, text, type } = props
  return (
    <Grid container className={classnames(classes.buttonFrame, classes[`back_button_${type}`])} direction="row">
      <Grid>
        <ArrowBackIcon className={classes.Icon} />
      </Grid>
      <Grid className={classes.text}>
        <Typography display="inline">BACK</Typography>
      </Grid>
    </Grid>
  )
}

const styles = (theme: any) => {
  return createStyles({
    ...theme.button_background,
    buttonFrame: {
      height: '10vH',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      flexGrow: 1,
      alignItems: 'center',
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(2),
      cursor: 'pointer'
    },
    text: {
      flexGrow: 1,
      marginLeft: theme.spacing(-8)
    },
    Icon: {
      borderRadius: '50%',
      backgroundColor: theme.palette.text.secondary,
      marginLeft: theme.spacing(2),
      padding: theme.spacing(1)
    }
  })
}

export default withStyles(styles, { name: 'MuiBackButton' })(BackButton)
