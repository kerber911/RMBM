import React from 'react'
import {Theme, withStyles} from '@material-ui/core/styles'
import  { createStyles, Grid, Button, Typography } from '@material-ui/core'
import { Translation } from 'react-i18next'

export interface SignupComponent {
    classes?: any
    text?: string 
}

const Signup = (props: SignupComponent) => {
    const{classes, text} = props
    return (
        <Grid>

        </Grid>
    )
}

const styles = (theme: Theme) => {
    createStyles({

    })
}

export default withStyles(styles, {name: 'MuiSingup'})(Signup);