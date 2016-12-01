import React from 'react'

import PostListContainer from './posts/PostsList/PostsListContainer'

const Restful = () => {
  return (
    <div>
      <h2>Restful calls / Redux side effects</h2>
      <p>
        Add Restful calls here
      </p>
      <div>
        <h2>Posts</h2>
        <PostListContainer />
      </div>
    </div>
  )
}

export default Restful
