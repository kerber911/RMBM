import React from 'react'
import { Theme, withStyles } from '@material-ui/core/styles'
import { createStyles, Grid, Button, Typography } from '@material-ui/core'
import { Translation } from 'react-i18next'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import { Link, withRouter, RouteComponentProps } from 'react-router-dom'

export interface TwoStepComponent extends RouteComponentProps {
  classes?: any
  text?: string
}

const TwoStep = (props: TwoStepComponent) => {
  const { classes, text } = props
  return (
    <Translation>
      {(t, { i18n }) => (
        <>
          <Grid className={classes.root}>
            <Grid item>
              <Grid className={classes.instruction}>
                <Typography variant="h5">{t('__login.enterphone')}</Typography>
              </Grid>
              <Typography variant="h5">
                <TextField
                  InputLabelProps={{
                    className: classes.inputField
                  }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start"></InputAdornment>,
                    disableUnderline: true,
                    required: true,
                    className: classes.inputField
                  }}
                  id="phone-number"
                />
              </Typography>
              <Typography variant="h5">{t('__login.recievesms')}</Typography>
            </Grid>
            <Button variant="contained" className={classes.button} onClick={() => props.history.push('/main')}>
              {t('__general.continue')}
            </Button>
            <Grid className={classes.link}>
              <Typography variant="h6">{t('__login.disclaimer')}</Typography>
            </Grid>
          </Grid>
        </>
      )}
    </Translation>
  )
}

const styles = (theme: Theme) => {
  return createStyles({
    link: {
      color: theme.palette.secondary.main,
      paddingBottom: theme.spacing(1),
      paddingTop: theme.spacing(1),
      textDecoration: 'none'
    },
    inputField: {
      borderBottom: '1px solid' + theme.palette.primary.main,
      color: theme.palette.text.primary,
      marginBottom: theme.spacing(5)
    },
    instruction: {
      paddingBottom: theme.spacing(10)
    },
    button: {
      alignItems: 'center',
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.text.secondary,
      width: '100%',
      marginBottom: theme.spacing(2),
      marginTop: theme.spacing(4)
    },
    root: {
      justifyContent: 'center',
      paddingLeft: '5%',
      paddingRight: '5%'
    }
  })
}

export default withRouter(withStyles(styles, { name: 'MuiTwoStep' })(TwoStep) as any)
