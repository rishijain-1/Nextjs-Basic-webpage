"use client";  // Required for client-side rendering in Next.js

import { useState } from 'react';
import style from './page.module.css';  // Adjust the path based on your file structure

// Define the Post interface
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Home = () => {
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchRandomPost = async () => {
    setLoading(true);

    try {
      // Fetch all posts
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const posts: Post[] = await response.json();

      // Select a random post
      const randomIndex = Math.floor(Math.random() * posts.length);
      const randomPost = posts[randomIndex];
      setPost(randomPost);
    } catch {
      // Optionally handle the error, or just ignore it
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={style.container}>
      <div className={style.content}>
        <div className={style.post}>
          {loading ? (
              <p>Loading...</p>
            ) : post ? (
              <>
                <h2 className={style.title}>Post Title :-{post.title}</h2>
                <p className={style.postbody}>{post.body}</p>
              </>
            ) : (
              <p>Click the button to generate a random post.</p>
            )}
        </div>
        <button
          className={style.button}
          onClick={fetchRandomPost}
          disabled={loading}
          >
          {loading ? 'Wait' : 'Click me'}
        </button>
      </div>
      
    </div>
  );
};

export default Home;
