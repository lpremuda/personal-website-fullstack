import { blue } from '@material-ui/core/colors';
import { purple } from '@material-ui/core/colors';
import { brown } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        // primary: {
        //     // orange-brown
        //     // main: "#bf360c"
        //     // gray
        //     // main: "#eeeeee"
        //     // dark gray
        //     // main: "#424242"

        // }
        primary: purple,
    },
    // background: {
    //     default: "#fff"
    // }
    // overrides: {
    //   MuiCssBaseline: {
    //     '@global': {
    //       '@font-face': "Source Sans Pro",
    //     },
    //   },
    // },
    typography: {
      fontFamily: '"Source Sans Pro", "Roboto", "Helvetica", "Arial", sans-serif'
    }
})

// theme.typography.fontFamily = '"Source Sans Pro", "Roboto", "Helvetica", "Arial", sans-serif'
// theme.typography.fontFamily = '"Roboto", "Helvetica", "Arial", sans-serif'

// h1-6, overline, body1/2, button, caption

theme.typography.h1 = {
  ...theme.typography.h1,
  [theme.breakpoints.down('xs')]: {
    fontSize: '5rem'
  }
}

export default theme;