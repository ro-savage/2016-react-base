import React from 'react'
import { connect } from 'react-redux'

import { getPost } from '../posts/postsSelectors'
import { fetchPost } from '../posts/postsActions'
import Post from './Post/Post'

const PostPage = (props) => {
  if (!props.post) {
    props.dispatchFetchPost(props.params.id)
  }

  return <Post post={props.post} />
}

PostPage.propTypes = {
  post: React.PropTypes.shape({
    id: React.PropTypes.number,
    title: React.PropTypes.string,
    body: React.PropTypes.string,
  }),
  params: React.PropTypes.shape({
    id: React.PropTypes.string,
  }),
  dispatchFetchPost: React.PropTypes.func.isRequired,
}

const mapStateToProps = (state, props) => ({
  post: getPost(props.params.id),
})

const mapDispatchToProps = dispatch => ({
  dispatchFetchPost: id => dispatch(fetchPost(id)),
})

const PostPageContainer = connect(mapStateToProps, mapDispatchToProps)(PostPage)

export default PostPageContainer
