import React from 'react'
import PostForm from '../PostForm/PostForm'
import Post from '../Post/Post'
import "./posts-list.css";

const PostsList = ({ posts }) => {
  return (
    <div className='posts-list-container'>
      <h1>BLOG POSTS</h1>
      <PostForm />
      {posts?.map((post,index) => (
        <Post key={index} number={index} post={post}/>
      ))}
    </div>
  )
}

export default PostsList
