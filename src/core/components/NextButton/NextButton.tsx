import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { createStyles, Grid, Typography } from '@material-ui/core'
import { Translation } from 'react-i18next'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import classnames from 'classnames'

export interface NextButtonComponent {
  classes?: any
  text?: string
  type?: string
}

const NextButton = (props: NextButtonComponent) => {
  const { classes, text, type } = props
  return (
    <Grid container className={classnames(classes.buttonFrame, classes[`next_button_${type}`])} direction="row">
      <Grid className={classes.text}>
        <Typography display="inline">NEXT</Typography>
      </Grid>
      <Grid>
        <ArrowForwardIcon className={classes.Icon} />
      </Grid>
    </Grid>
  )
}

const styles = (theme: any) => {
  return createStyles({
    ...theme.button_background,
    buttonFrame: {
      height: theme.spacing(10),
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
      paddingLeft: theme.spacing(7)
    },
    Icon: {
      borderRadius: '50%',
      backgroundColor: theme.palette.text.secondary,
      color: theme.palette.text.primary,
      marginRight: theme.spacing(2),
      padding: theme.spacing(1)
    }
  })
}

export default withStyles(styles, { name: 'MuiNextButton' })(NextButton)
