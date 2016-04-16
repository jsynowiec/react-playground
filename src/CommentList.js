import React, { PropTypes } from 'react';

import Comment from './Comment';

const propTypes = {
  data: PropTypes.array.isRequired,
};

function CommentList({ data }) {
  const commentNodes = data.map(
    (comment) => (
      <Comment author={comment.author} key={comment.id}>
        {comment.text}
      </Comment>
    )
  );

  return (
    <div className="commentList">
      {commentNodes}
    </div>
  );
}

CommentList.propTypes = propTypes;

export default CommentList;
