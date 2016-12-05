import React from 'react'

import PostListContainer from '../../features/posts/PostsList/PostsListContainer'
import PostInputContainer from '../../features/posts/PostInput/PostInputContainer'

const RestPage = () => {
  return (
    <div>
      <h2>Restful calls / Redux side effects</h2>
      <p>
        Add Restful calls here
      </p>
      <div>
        <h2>Posts</h2>
        <PostListContainer />
        <br />
        <PostInputContainer />
      </div>
    </div>
  )
}

export default RestPage
