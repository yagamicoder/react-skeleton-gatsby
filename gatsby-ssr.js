/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import React from 'react'
import { Provider } from 'react-redux'
import { renderToString } from 'react-dom/server'
import store from 'state/createReduxStore'

exports.replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
  const ConnectedBody = () => (
    <Provider store={store}>
      {bodyComponent}
    </Provider>
  )
  replaceBodyHTMLString(renderToString(<ConnectedBody />))
}