import './Lesson07Styles.css';
import { getSinglePost } from './api';
import { useState } from 'react';

export default function FetchOnClick() {
  const [currentPost, setCurrentPost] = useState();
  const [loading, setLoading] = useState(false);

  async function loadPost(id) {
    try {
      setLoading(true);
      const data = await getSinglePost(id);
      setCurrentPost(data);
    } catch (error) {
      console.log(error.message);
      setCurrentPost();
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="root">
      <h1 className="heading">Fetch single post on click</h1>
      <button type="button" disabled={loading} onClick={() => loadPost(1)}>
        Get post
      </button>
      <div className="content">
        {loading ? (
          'Loading ....'
        ) : currentPost ? (
          <div className="post">
            <h2>{currentPost.title}</h2>
            <p>{currentPost.body}</p>
          </div>
        ) : (
          'Click Get post data button'
        )}
      </div>
    </div>
  );
}
