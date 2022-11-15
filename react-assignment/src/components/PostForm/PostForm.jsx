import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPost } from '../../redux/features/postSlice';
import "./post-form.css";

const PostForm = () => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.post.postsList);
  const [post, setPost] = useState({
    userId: 20,
    id: null,
    title: "",
    body: ""
  });
  const { title, body } = post;
  const handleChange = (e) => {
    setPost({ ...post, id: posts?.length + 1, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === "") {
      window.alert("Title and content cannot be empty");
      return
    } else {
      dispatch(addPost(post));
      setPost({
        title: "",
        body: ""
      })
    }



  }

  return (
    <form onSubmit={handleSubmit} className="post-form-container">
      <input
        name='title'
        value={title}
        onChange={handleChange}
        className="title-input"
        placeholder="Enter post title..."
        required
      />
      <textarea
        name='body'
        value={body}
        onChange={handleChange}
        className="body-input"
        placeholder="Enter post content..."
        required
      />
      <button type='submit'
        className='submit-btn'>Submit</button>
    </form>
  )
}

export default PostForm
