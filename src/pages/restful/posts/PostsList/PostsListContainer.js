import { connect } from 'react-redux'

import PostList from './PostsList'

const mapStateToProps = ({ posts }) => ({
  posts: posts.posts,
})

export default connect(mapStateToProps)(PostList)
