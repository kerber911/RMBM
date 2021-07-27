import { PaletteOptions } from '@material-ui/core/styles/createPalette'

const palette = (): PaletteOptions => {
  return {
    primary: {
      main: '#F7931E',
      dark: '#E0D3B9',
      light: '#F7931E',
      contrastText: '#FCCD84'
    },
    secondary: {
      main: '#B6A37C',
      dark: '#F7931E',
      light: '#F7931E',
      contrastText: '#F7931E'
    },
    error: {
      main: '#F7931E',
      dark: '#F7931E',
      light: '##E0D3B9',
      contrastText: '#F7931E'
    },
    text: {
      primary: '#000000',
      secondary: '#FFFFFF',
      disabled: '#666666',
      hint: '#B6A37C'
    },
    background: {
      default: '#FFFFFF'
    }
  }
}

export default palette
