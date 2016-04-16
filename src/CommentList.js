import React from 'react';

import Comment from './Comment';

export default function CommentList() {
  return (
    <div className="commentList">
      <Comment author="Pete Hunt">This is one comment</Comment>
      <Comment author="Jordan Walke">This is *another* comment</Comment>
    </div>
  );
}
