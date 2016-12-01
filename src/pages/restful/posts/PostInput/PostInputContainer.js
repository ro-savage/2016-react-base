import { connect } from 'react-redux'

import PostInput from './PostInput'

import { addPost } from '../postsActions'

const mapDispatchToProps = dispatch => ({
  save: post => dispatch(addPost(post)),
})

const PostInputContainer = connect(undefined, mapDispatchToProps)(PostInput)

export default PostInputContainer
