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
    h1: {
      fontWeight: 500,
      fontSize: '3rem',
      lineHeight: 1.2,
      color: palette.text.secondary
    },
    h2: {
      fontWeight: 500,
      fontSize: '3rem',
      lineHeight: 1.2,
      color: palette.text.primary
    },
    h5: {
      fontWeight: 500,
      fontSize: '1.2rem',
      lineHeight: 1.2,
      color: palette.text.primary
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
