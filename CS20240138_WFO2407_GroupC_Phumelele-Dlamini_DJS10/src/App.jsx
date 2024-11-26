import { useState, useEffect } from "react";
import "./App.css"

function App() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state during API fetch function

  useEffect(() => {
    setLoading(true); // Update the state of loading before fetching
    fetch("https://jsonplaceholder.typicode.com/posts") // error URL for testing: 'https://invalid-jsonplaceholder.typicode.com/posts'
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }
        return response.json();
      })
      .then((data) => {
        setPosts(data);
        setLoading(false); // Update loading state to false after successful fetching
      })
      .catch((error) => {
        setError(`Data fetching failed: ${error.message}`);
        setLoading(false); // Update loading state to false after failed fetching
      });
  }, []);

  // Display loading state
  if (loading) {
    return <div>Loading...</div>;
  }

  // Display error message if an error occurs
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="blog-container">
      <h1 className="blog-header">Blog Posts</h1>
      <div className="posts-grid">
        {posts.map((post) => (
          <div key={post.id} className="post-card">
            <h2 className="post-title">{post.title}</h2>
            <p className="post-body">{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

