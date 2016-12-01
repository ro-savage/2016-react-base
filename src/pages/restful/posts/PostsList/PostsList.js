import React from 'react'

import List from '../../../../components/List/List'

const PostList = (props) => {
  return (
    <div>
      <List items={props.posts} />
    </div>
  )
}

PostList.propTypes = {
  posts: React.PropTypes.arrayOf(React.PropTypes.string),
}

export default PostList
