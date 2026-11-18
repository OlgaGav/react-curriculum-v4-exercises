import './Lesson07Styles.css';
import { useEffect, useState } from 'react';
import { getPosts } from './api';

export default function FetchOnRender() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPosts() {
      try {
        const data = await getPosts();
        setPosts(data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    }
    loadPosts();
  }, []);

  return (
    <div className="root">
      <h1 className="heading">Fetch list of posts on render</h1>
      <div className="content">
        {loading
          ? 'Loading ...'
          : posts.length > 0
            ? posts.map((post) => (
                <div key={post.id} className="post">
                  <h2>{post.title}</h2>
                  <p>{post.body}</p>
                  <p>Author: {post.userId}</p>
                </div>
              ))
            : 'No posts'}
      </div>
    </div>
  );
}
