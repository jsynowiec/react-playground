import React, { PropTypes } from 'react';
import marked from 'marked';

const propTypes = {
  author: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

function Comment({ author, children }) {
  function rawMarkup() {
    return {
      __html: marked(children.toString(), { sanitize: true }),
    };
  }

  return (
    <div className="comment">
      <h2 className="commentAuthor">
        {author}
      </h2>
      <span dangerouslySetInnerHTML={rawMarkup()} />
    </div>
  );
}

Comment.propTypes = propTypes;

export default Comment;
