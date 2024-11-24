import { useState, useEffect } from "react";

function App() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state during API fetch function

  useEffect(() => {
    setLoading(true) //Update the state of loading before fetching
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        return response.json();
      })
      .then(data => {
        setPosts(data)
        setLoading(false)// Update loading state to false after successful fetching
      })
      .catch(error => {
        setError(error.message)
        setLoading(false)// Update loading state to false after failed fetching
      });
  }, []);

  //Display loading state
  if(loading === true){
    return <div>Loading...</div>
  }
  //Display error message and error state
  if(error=== true){
    return <div>Error: {error}</div>
  }

  return (
    <>
      <h1>The blog goes here</h1>
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
}

export default App;

