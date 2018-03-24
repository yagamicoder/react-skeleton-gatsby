/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from 'react'
import PropTypes from 'prop-types';
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from 'state/createReduxStore'

exports.replaceRouterComponent = ({ history }) => {
  const ConnectedRouterWrapper = ({ children }) => (
    <Provider store={store}>
      <Router history={history}>{children}</Router>
    </Provider>
  )
  ConnectedRouterWrapper.propTypes = {
    children: PropTypes.any
  }
  return ConnectedRouterWrapper
}