import { connect } from 'react-redux'

import ReduxCounter from './ReduxCounter'
import { increaseCounter, decreaseCounter } from './ReduxCounterActions'

const mapStateToProps = ({ reduxCounter }) => ({
  counter: reduxCounter.counter,
})

const mapDispatchToProps = dispatch => ({
  increase: () => dispatch(increaseCounter()),
  decrease: () => dispatch(decreaseCounter()),
})

const ReduxCounterContainer = connect(mapStateToProps, mapDispatchToProps)(ReduxCounter)

export default ReduxCounterContainer
