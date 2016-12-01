import { connect } from 'react-redux'

import ReduxCounter from './ReduxCounter'
import { increaseCounter, decreaseCounter, increaseCounterAsync } from './ReduxCounterActions'

const mapStateToProps = ({ reduxCounter }) => ({
  counter: reduxCounter.counter,
})

const mapDispatchToProps = dispatch => ({
  increase: () => dispatch(increaseCounter()),
  decrease: () => dispatch(decreaseCounter()),
  increaseAsync: () => dispatch(increaseCounterAsync()),
})

const ReduxCounterContainer = connect(mapStateToProps, mapDispatchToProps)(ReduxCounter)

export default ReduxCounterContainer
