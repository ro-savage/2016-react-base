import React from 'react'

const Post = (props) => {
  return (
    <div>
      <p><b>title:</b> {props.title}</p>
      <p><b>Body:</b> {props.body}</p>
      <p><b>id:</b> {props.id}</p>
      <p><b>userId:</b> {props.userId}</p>
    </div>
  )
}

Post.propTypes = {
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
}

export default Post
