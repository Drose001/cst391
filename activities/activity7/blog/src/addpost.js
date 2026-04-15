import React, { useState } from 'react';

function AddPost(props) {
  const [text, setText] = useState('');

  const handleAddClick = () => {
    if (text.trim() === '') {
      return;
    }

    props.onAddPost(text);
    setText('');
  };

  return (
    <div>
      <h2>Add a New Post</h2>
      <textarea
        rows="4"
        cols="50"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write your blog post here..."
      />
      <br />
      <button onClick={handleAddClick}>Add Post</button>
    </div>
  );
}

export default AddPost;