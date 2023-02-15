import './App.css';
import Header from './components/Header';
import {useState, useEffect} from 'react';
import Definition from './components/Definition';

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
      <Header/>
    <Definition/>
    </div>
  );
}

export default App;
