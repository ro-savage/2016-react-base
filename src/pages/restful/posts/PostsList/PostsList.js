import React from 'react'

import List from '../../../../components/List/List'
import Button from '../../../../components/Button/Button'

const PostList = (props) => {
  return (
    <div>
      <List items={props.posts} />
      <Button onClick={props.dispatchFetchPosts}>Fetch Posts</Button>
    </div>
  )
}

PostList.propTypes = {
  posts: React.PropTypes.arrayOf(React.PropTypes.string),
  dispatchFetchPosts: React.PropTypes.func,
}

export default PostList
