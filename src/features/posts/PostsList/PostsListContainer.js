import { connect } from 'react-redux'

import PostList from './PostsList'
import { fetchPosts } from '../postsActions'
import { getPosts } from '../postsSelectors'
import { fetchUsers } from '../../users/usersActions'
import { getUsers } from '../../users/usersSelectors'


const mapStateToProps = state => ({
  posts: getPosts(state),
  users: getUsers(state),
})

const mapDispatchToProps = dispatch => ({
  dispatchFetchPosts: () => {
    dispatch(fetchPosts())
    dispatch(fetchUsers())
  },
})

const PostListContainer = connect(mapStateToProps, mapDispatchToProps)(PostList)

export default PostListContainer
