import { useState , useEffect} from "react"

function App() {
  
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  
  useEffect(() => {
   fetch( 'https://jsonplaceholder.typicode.com/posts')
   .then(response => {
    if (!response.ok) {
      throw new Error('');
    }
    return response.json();
  })
  .then(data => setPosts(data))
  .catch(error => setError(error.message));
  }, []);

  return (
    <>
      <h1>The blog goes here</h1>
    </>
  )
}

export default App
