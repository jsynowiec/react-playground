import React from 'react';

import CommentList from './CommentList';
import CommentForm from './CommentForm';

export default function CommentBox() {
  return (
    <div className="commentBox">
      <h1>Comments</h1>
      <CommentList />
      <CommentForm />
    </div>
  );
}
