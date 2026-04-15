import React, { useState } from 'react';
import Post from './post';
import AddPost from './addpost';

function App() {
  const [postList, setPostList] = useState([
    { id: 1, text: "This is my first blog post." },
    { id: 2, text: "Learning React is pretty cool." },
    { id: 3, text: "Dynamic components are powerful!" }
  ]);

  const [postId, setPostId] = useState(4);

  const handleDeletePost = (id) => {
    const updatedPostList = postList.filter((post) => post.id !== id);
    setPostList(updatedPostList);
  };

  const handleAddPost = (text) => {
    const newPost = {
      id: postId,
      text: text
    };

    setPostList((currentPostList) => [...currentPostList, newPost]);
    setPostId(postId + 1);
  };

  return (
    <div>
      <h1>Blog App</h1>

      <AddPost onAddPost={handleAddPost} />

      {postList.map((post) => (
        <Post
          key={post.id}
          postNumber={post.id}
          text={post.text}
          onDelete={handleDeletePost}
        />
      ))}
    </div>
  );
}

export default App;