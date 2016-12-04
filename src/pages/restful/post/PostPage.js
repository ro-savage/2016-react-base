import React from 'react'
import { connect } from 'react-redux'

import { getPost } from '../posts/postsSelectors'
import { fetchPost } from '../posts/postsActions'
import Post from './Post/Post'

const PostPage = (props) => {
  if (!props.post) {
    props.dispatchFetchPost(props.params.id)
    return <p>Loading post...</p>
  }

  return (
    <Post
      id={props.post.id}
      title={props.post.title}
      body={props.post.body}
      userId={props.post.userId}
    />
  )
}

PostPage.propTypes = {
  post: React.PropTypes.shape({
    id: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number,
    ]),
    title: React.PropTypes.string,
    body: React.PropTypes.string,
    userId: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number,
    ]),
  }),
  params: React.PropTypes.shape({
    id: React.PropTypes.string,
  }),
  dispatchFetchPost: React.PropTypes.func.isRequired,
}

const mapStateToProps = (state, props) => ({
  post: getPost(state, props.params.id),
})

const mapDispatchToProps = dispatch => ({
  dispatchFetchPost: id => dispatch(fetchPost(id)),
})

const PostPageContainer = connect(mapStateToProps, mapDispatchToProps)(PostPage)

export default PostPageContainer
