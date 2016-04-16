import React, { PropTypes } from 'react';

import CommentList from './CommentList';
import CommentForm from './CommentForm';

const propTypes = {
  data: PropTypes.array.isRequired,
};

function CommentBox({ data }) {
  return (
    <div className="commentBox">
      <h1>Comments</h1>
      <CommentList data={data} />
      <CommentForm />
    </div>
  );
}

CommentBox.propTypes = propTypes;

export default CommentBox;
