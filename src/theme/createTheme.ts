import createTypography from './createTypography'
import palette from './createPalette'
import { createMuiTheme } from '@material-ui/core'
import createPalette from '@material-ui/core/styles/createPalette'
import createTypographyStyle from './createTypography'

const Palette = createPalette(palette())

const theme = {
  ...createMuiTheme({
    palette: Palette,
    typography: createTypographyStyle(Palette),
    spacing: 8
  }),
  //custom coloring for 'next' and 'back buttons'
  button_background: {
    next_button_rent: {
      backgroundColor: '#F7931E',
      color: '#FFFFFF'
    },
    back_button_rent: {
      border: '1px solid #F7931E',
      color: '#F7931E'
    },
    back_button_buy: {
      border: '1px solid #B6A37C',
      color: '#B6A37C'
    },
    next_button_buy: {
      backgroundColor: '#49402F',
      color: '#FFFFFF'
    }
  }
}

export default theme
