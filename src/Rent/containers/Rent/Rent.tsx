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

class Rent extends React.Component<State & any> {
  state: State = {
    retype: ''
  }

  showRealEstate = (realestate: string) => {
    this.setState({ retype: realestate })
    this.props.history.push('/rent/estate')
  }

  render() {
    const { classes } = this.props
    return (
      <Translation>
        {(t, { i18n }) => (
          <Grid>
            <Switch>
              <Route exact path="/rent">
                <Grid>
                  <HeaderSecondary title={t('__rent.title')} color={`#F7931E`} />
                  <Grid className={classes.root}>
                    <Grid onClick={() => this.showRealEstate('r_move_into')}>
                      <OptionsBlock MenuItem={false} icon={'Rent1'} ItemText={t('__rent.lookingtomove')} />{' '}
                      {/*onClick={() => props.history.push('/login/two_step') }*/}
                    </Grid>
                    <Grid onClick={() => this.showRealEstate('r_find_move')}>
                      <OptionsBlock MenuItem={false} icon={'Rent2'} ItemText={t('__rent.findsomeonetomove')} />
                    </Grid>
                    <Grid onClick={() => this.showRealEstate('r_landlord')}>
                      <OptionsBlock MenuItem={false} icon={'Rent3'} ItemText={t('__rent.landlord')} />
                    </Grid>
                    <Grid className={classes.backButton} onClick={() => this.props.history.push('/main')}>
                      <BackButton type={'rent'} />
                    </Grid>
                  </Grid>
                </Grid>
              </Route>
              <Route
                exact
                path="/rent/location"
                component={() => (
                      <Location />
                )}
              ></Route>
              <Route
                exact
                path="/rent/estate"
                component={() => (
                  <Grid>
                    <HeaderSecondary title={t('__rent.title')} color={`#F7931E`} />
                    <Grid className={classes.root}>
                      <REType type={this.state.retype}/>
                    </Grid>
                  </Grid>
                )}
              ></Route>
              <Route
                exact
                path="/rent/survey"
                component={() => (
                  <Grid>
                    <HeaderSecondary title={t('__rent.title')} color={`#F7931E`} />
                    <Grid className={classes.root}>
                      <Survey />
                    </Grid>
                  </Grid>
                )}
              ></Route>
            </Switch>
          </Grid>
        )}
      </Translation>
    )
  }
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
    backButton: {
      marginTop: theme.spacing(7)
    }
  })
}

export default withStyles(styles, { name: 'MuiRent' })(Rent) //connect (mapStateToProps,mapDispathToProps)
