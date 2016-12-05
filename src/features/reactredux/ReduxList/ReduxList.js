import React from 'react'

import ReduxListInput from './ReduxListInput'
import List from '../../../components/List/List'

const ReduxList = (props) => {
  return (
    <div>
      <List items={props.items} />
      <ReduxListInput save={props.save} />
    </div>
  )
}

ReduxList.propTypes = {
  items: React.PropTypes.arrayOf(React.PropTypes.string),
  save: React.PropTypes.func,
}

export default ReduxList
