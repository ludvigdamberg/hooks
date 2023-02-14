import './App.css';
import {useState, useEffect} from 'react';


function App() {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts`
    );
    const data = await response.json();

    setPosts(data);

  }

  return (
    
    <div className="App">
    {posts.map(post => 
      (<div key={post.id}>
        <h5>{post.title}</h5>
        <p>{post.body}</p>
      </div>
      ))}
    
    </div>
  );
}

export default App;
