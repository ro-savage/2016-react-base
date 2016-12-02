import { connect } from 'react-redux'

import PostList from './PostsList'
import { fetchPosts } from '../postsActions'
import { getPosts } from '../postsSelectors'

const mapStateToProps = state => ({
  posts: getPosts(state),
})

const mapDispatchToProps = dispatch => ({
  dispatchFetchPosts: () => dispatch(fetchPosts()),
})

const PostListContainer = connect(mapStateToProps, mapDispatchToProps)(PostList)

export default PostListContainer
