import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
      primary: {
        // main: '#311b92' //deep puple
        // main: '#455a64' //blue grey
        // main: '#00796b' //teal
        main: '#3d5afe'
      },
      secondary: {
        main: '#ffc107'
      }
    },
    // background: {
    //     default: "#fff"
    // }
    typography: {
      fontFamily: '"Source Sans Pro", "Roboto", "Helvetica", "Arial", sans-serif'
    }
})

theme.typography.h1 = {
  ...theme.typography.h1,
  [theme.breakpoints.down('xs')]: {
    fontSize: '5rem'
  }
}

export default theme;