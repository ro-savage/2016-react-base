import { connect } from 'react-redux'

import ReduxList from './ReduxList'
import { saveListItem } from './ReduxListActions'

const mapStateToProps = ({ reduxList }) => ({
  items: reduxList.items,
})

const mapDispatchToProps = dispatch => ({
  save: data => dispatch(saveListItem(data)),
})

const ReduxListContainer = connect(mapStateToProps, mapDispatchToProps)(ReduxList)

export default ReduxListContainer
