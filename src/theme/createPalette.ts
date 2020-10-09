import { PaletteOptions } from '@material-ui/core/styles/createPalette'

const palette = (): PaletteOptions => {
    return{
        primary:{
            main: '#F7931E',
            dark:'',
            light:'',
            contrastText: '#FCCD84'
        },
        secondary:{
            main: '',
            dark:'',
            light:'',
            contrastText: ''
        },
        error:{
            main: '',
            dark:'',
            light:'',
            contrastText: ''
        },
        text:{
            primary: '#000000',
            secondary:'#FCCD84',
            disabled:'',
            hint: '#FFFFFF'
        },
        background:{
            default:'#FFFFFF'
        }
    }

}

export default palette