import React from 'react'
import { Link } from 'react-router'
import List from '../../../../components/List/List'
import Button from '../../../../components/Button/Button'

const PostList = (props) => {
  return (
    <div>
      <List>
        <div>
          {props.posts.map((p, i) => (
            <li key={i}><Link to={`/restful/post/${p.id}`}>{p.title}</Link></li>
          ))}
        </div>
      </List>
      <Button onClick={props.dispatchFetchPosts}>Fetch posts from server</Button>
    </div>
  )
}

PostList.propTypes = {
  posts: React.PropTypes.arrayOf(React.PropTypes.object),
  dispatchFetchPosts: React.PropTypes.func.isRequired,
}

export default PostList
