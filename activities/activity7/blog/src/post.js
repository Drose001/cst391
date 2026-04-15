import React from 'react';
import './post.css';

function Post(props) {
  return (
    <div className="post">
      <h3>Post #{props.postNumber}</h3>
      <p>{props.text}</p>
      <button onClick={() => props.onDelete(props.postNumber)}>Delete</button>
    </div>
  );
}

export default Post;