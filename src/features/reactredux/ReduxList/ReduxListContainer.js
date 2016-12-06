import { connect } from 'react-redux'

import ReduxList from './ReduxList'
import { saveListItem } from './ReduxListActions'

/*
  Container components link our redux data store with our react components.
  mapStateToProps allows us to take data from the redux store to display in the components.
  When it is passed to connect, it will pass the object down as its props.

  When the data modified or created from a component is going be shared acros multiple components
  or persist across pages it must be saved to redux.
  We do this with the mapDispatchToProps which created a function to be passed as a prop to the
  React component which then dispatches and action and the data.

  If the data is only ever going to be used inside a single component, and does not need to
  persist it should be saved no in redux but in the react component state.
  See: https://github.com/reactjs/redux/issues/1287
 */

// We using destructing to take the reduxList property from the origina paramater (in this case
// state). This is equal to
// const map = (props) => {
//   const reduxList = props.reduxList
//   return { items: reduxList.items }
// }
// We use explicted returning by wrapping our object in (), so that it knows that we are simply
// returning an object.
// This object is then passed though the connect function to ReduxList as one of its props.
const mapStateToProps = ({ reduxList }) => ({
  items: reduxList.items,
})

// We use implied return to return a object contain a single method.
// This method takes a data param and both exectures and returns the dispatch function
// with the saveListItem action.
// This allows us to save data to the redux store.
const mapDispatchToProps = dispatch => ({
  save: data => dispatch(saveListItem(data)),
})

// Creates our new container component that passes our state and actions to ReduxList
const ReduxListContainer = connect(mapStateToProps, mapDispatchToProps)(ReduxList)

export default ReduxListContainer
