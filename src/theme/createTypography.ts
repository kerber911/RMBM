import { TypographyOptions } from '@material-ui/core/styles/createTypography'
import  { Palette } from '@material-ui/core/styles/createPalette'

const createTypographyStyle = (palette: Palette): TypographyOptions => {
  return {
    fontFamily: 'Manrope',
    fontSize: 10,
    htmlFontSize: 10,
    button: {
      fontSize: '.75rem'
    }
  }
}

export default createTypographyStyle