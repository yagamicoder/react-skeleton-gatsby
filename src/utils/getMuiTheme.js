import { createMuiTheme } from 'material-ui/styles';
import indigo from 'material-ui/colors/indigo';

const muiTheme = createMuiTheme({
  palette: {
    primary: { main: indigo[500] },
    secondary: { main: indigo[800] }
  },
  typography: {
    fontFamily: '"Open Sans Condensed", sans-serif'
  }
});

export default muiTheme;