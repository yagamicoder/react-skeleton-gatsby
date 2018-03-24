import React, { Component } from 'react'
import PropTypes from 'prop-types';
import CssBaseline from 'material-ui/CssBaseline'
import { Header, Footer } from 'components'
import muiTheme from 'utils/getMuiTheme'
import { MuiThemeProvider } from 'material-ui/styles'
import 'styles/custom.css'

class AppLayout extends Component {
  render() {
    return (
      <MuiThemeProvider theme={muiTheme}>
        <div>
          <CssBaseline />
          <Header />
          {this.props.children()}
          <Footer />
        </div>
      </MuiThemeProvider>
    )
  }
}

AppLayout.propTypes = {
  children: PropTypes.any
}

export default AppLayout
