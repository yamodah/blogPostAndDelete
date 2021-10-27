import React, { useState } from "react";
import "./App.css";
import PostCreate from "./PostCreate";
import PostList from "./PostList";

function App() {
  const [posts, setPosts] = useState([]);
  
  // TODO: Add the ability for the <PostCreate /> component to create new posts.
  // TODO: Add the ability for the <PostList /> component to delete an existing post.

  return (
    <div className="App">
      <PostCreate posts={posts} postsSettingMethod={setPosts}/>
      <PostList posts={posts} postsSettingMethod={setPosts}/>
    </div>
  );
}

export default App;
