import React from 'react'
import { Theme } from '@material-ui/core/styles'
import  { createStyles, Grid, Button, Typography, WithStyles, withStyles } from '@material-ui/core'
import { Translation } from 'react-i18next'
import Signup from './../components/Signup/Signup'
import LoginVia from '../components/LoginVia/LoginVia' 
import { ReactComponent } from '*.svg'
import { couldStartTrivia } from 'typescript'
import { ThunkDispatch } from 'redux-thunk'
import { connect } from 'react-redux'

const styles = (theme: Theme) => {
    createStyles({
        root:{
            background: 'white'
        }
    })
}

//type StyleProps = {} //& WithStyles<typeof styles>


class Login extends React.Component{

    render(){
        return (
            <div>
            </div>
        )
    }
}


const mapStateToProps  = (dispatch: ThunkDispatch<{},{},any>) => {
    return {

    }
}

const mapDispathToProps = () => {
    return {
        
    }
}

export default connect (mapStateToProps,mapDispathToProps) (withStyles(styles,{name: 'Muilogin'})(Login));