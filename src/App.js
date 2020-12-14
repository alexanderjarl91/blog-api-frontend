import React, {useState, useEffect} from 'react';

//import components
import Post from './components/Post'
import Header from './components/Header'

import axios from 'axios'
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(async () => {
    const result = await axios(
      'https://md5-blog-api.herokuapp.com/posts',
    );
 
    setPosts(result.data);
  }, []);


  return (
    <>
      <Header />
      <Post data={posts} />

    </>
  );
}

export default App;
