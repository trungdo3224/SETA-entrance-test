import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import PostsList from './components/PostsList/PostsList';
import { getPosts } from './redux/features/postSlice';
import { useFetchPostsQuery } from './redux/services/postService';

function App() {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.post.postsList);
  const { data } = useFetchPostsQuery();
  useEffect(() => {
    dispatch(getPosts(data));
  }, [data])

  return (
    <div className="App">
      <PostsList posts={posts} />
    </div>
  );
}

export default App;
