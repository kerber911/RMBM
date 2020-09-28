import createTypography from './createTypography'
import palette from './createPalette'
import { createMuiTheme } from '@material-ui/core'
import createPalette from '@material-ui/core/styles/createPalette'
import createTypographyStyle from './createTypography'

const Palette = createPalette(palette())


const theme  = createMuiTheme({
  palette: Palette,
  typography: createTypographyStyle(Palette),
  spacing: 8
})

export default theme