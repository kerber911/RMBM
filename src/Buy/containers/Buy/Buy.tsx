import React from 'react'
import { Theme } from '@material-ui/core/styles'
import { createStyles, Grid, Button, Typography, withStyles } from '@material-ui/core'
import { Translation } from 'react-i18next'
import { ThunkDispatch } from 'redux-thunk'
import { connect } from 'react-redux'
import OptionsBlock from '../../../core/components/OptionsBlock/OptionsBlock'
import HeaderSecondary from '../../../Login/components/HeaderSecondary'
import NextButton from '../../../core/components/NextButton/NextButton'
import BackButton from '../../../core/components/BackButton/BackButton'
import Survey from '../../../core/components/Survey'
import { Route, Switch } from 'react-router-dom'
import REType from '../../../core/components/REType'
import Location from '../../../core/components/Location'

interface State {
  retype: ''
}

class Buy extends React.Component<any> {
  state: State = {
    retype: ''
  }

  showRealEstate = (realestate: string) => {
    this.setState({ retype: realestate })
    this.props.history.push('/buy/estate')
  }

  render() {
    const { classes } = this.props
    return (
      <Translation>
        {(t, { i18n }) => (
          <Switch>
            <Route exact path="/buy">
              <Grid>
                <HeaderSecondary title={t('__buy.title')} color={`#49402F`} />
                <Grid className={classes.root}>
                  <Grid onClick={() => this.showRealEstate('b_with_ano')}>
                    <OptionsBlock MenuItem={false} icon={'Buy1'} ItemText={t('__buy.homewithanother')} />
                  </Grid>
                  <Grid onClick={() => this.showRealEstate('b_invest')}>
                    <OptionsBlock MenuItem={false} icon={'Buy2'} ItemText={t('__buy.investment')} />
                  </Grid>
                  <Grid onClick={() => this.showRealEstate('b_commerce')}>
                    <OptionsBlock MenuItem={false} icon={'Buy3'} ItemText={t('__buy.commercial')} />
                  </Grid>
                  <OptionsBlock MenuItem={false} ItemText={t('__buy.cottage')} />
                  <OptionsBlock MenuItem={false} ItemText={t('__buy.farm')} />
                  <Grid onClick={() => this.props.history.push('/main')}>
                    <BackButton type={'buy'} />
                  </Grid>
                </Grid>
              </Grid>
            </Route>
            <Route
              exact
              path="/buy/location"
              component={() => (
                <Grid>
                  <HeaderSecondary title={t('__buy.title')} color={`#49402F`} />
                  <Grid className={classes.root}>
                    <Location />
                  </Grid>
                </Grid>
              )}
            ></Route>
            <Route
              exact
              path="/buy/estate"
              component={() => (
                <Grid>
                  <HeaderSecondary title={t('__buy.title')} color={`#49402F`} />
                  <Grid className={classes.root}>
                    <REType type={this.state.retype} />
                  </Grid>
                </Grid>
              )}
            ></Route>
            <Route
              exact
              path="/buy/survey"
              component={() => (
                <Grid>
                  <HeaderSecondary title={t('__buy.title')} color={`#49402F`} />
                  <Grid className={classes.root}>
                    <Survey />
                    <NextButton type={'buy'} />
                    <BackButton type={'buy'} />
                  </Grid>
                </Grid>
              )}
            ></Route>
          </Switch>
        )}
      </Translation>
    )
  }
}

const styles = (theme: Theme) => {
  return createStyles({
    root: {
      justifyContent: 'center',
      paddingLeft: '5%',
      paddingRight: '5%'
    },
    header: {
      border: '1px solid' + theme.palette.text.primary
    }
  })
}

export default withStyles(styles, { name: 'MuiBuy' })(Buy) //connect (mapStateToProps,mapDispathToProps)
