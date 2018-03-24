import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { increment } from 'state/counter/actions'
import Button from 'material-ui/Button'
import Icon from 'material-ui/Icon'
import { withStyles } from 'material-ui/styles'
import { compose } from 'recompose'
import 'styles/custom.css'
import { Helmet } from 'react-helmet'

const Counter = ({ count, increment, classes }) => (
  <div>
    <Helmet>
      <title>Counter</title>
    </Helmet>
    <p>Count: {count}</p>
    <Button className={classes.button} variant='raised' color='primary' onClick={() => increment()}>
      Increment
      <Icon className={classes.rightIcon}>send</Icon>
    </Button>
  </div>
)

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  classes: PropTypes.object
}

const mapStateToProps = ({ counter }) => {
  const count = counter.get('count', 0);
  return {
    count
   }
}

const allActions = {
  increment
}

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  }
})

export default compose(
  connect(mapStateToProps, allActions),
  withStyles(styles)
)(Counter)