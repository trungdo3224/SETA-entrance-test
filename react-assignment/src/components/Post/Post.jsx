import React from 'react';
import "./post.css"

const Post = ({ post, number }) => {
  return (
    <div className='post-container'>
      <h3>{number + 1}. {post?.title}</h3>
      <p>{post?.body}</p>
    </div>
  )
}

export default Post
