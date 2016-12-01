import { connect } from 'react-redux'


import PostList from './PostsList'
import { fetchPosts } from '../postsActions'

const mapStateToProps = ({ posts }) => ({
  posts: posts.posts,
})

const mapDispatchToProps = dispatch => ({
  dispatchFetchPosts: () => dispatch(fetchPosts()),
})

export default connect(mapStateToProps, mapDispatchToProps)(PostList)
