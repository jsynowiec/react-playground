import React, { PropTypes } from 'react';

import CommentList from './CommentList';
import CommentForm from './CommentForm';

const propTypes = {
  data: PropTypes.array.isRequired,
};

class CommentBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      lastId: props.data.slice(-1)[0].id,
    };

    this.appendComment = this.appendComment.bind(this);
  }
  appendComment(author, text) {
    const lastId = this.state.lastId + 1;

    this.setState({
      data: [
        ...this.state.data,
        Object.assign({ id: lastId }, { author, text }),
      ],
      lastId,
    });
  }
  render() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.state.data} />
        <CommentForm appendComment={this.appendComment} />
      </div>
    );
  }
}

CommentBox.propTypes = propTypes;

export default CommentBox;
