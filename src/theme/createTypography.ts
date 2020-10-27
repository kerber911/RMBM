import { TypographyOptions } from '@material-ui/core/styles/createTypography'
import { Palette } from '@material-ui/core/styles/createPalette'

const createTypographyStyle = (palette: Palette): TypographyOptions => {
  return {
    fontFamily: 'QuattrocentoSans',
    fontSize: 10,
    htmlFontSize: 10,
    button: {
      fontSize: '.75rem'
    },
    h6: {
      fontWeight: 500,
      fontSize: '.8rem',
      lineHeight: 1.2,
      color: palette.text.primary
    }
  }
}

export default createTypographyStyle
