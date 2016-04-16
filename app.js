// app.js

require('./app.less');

import React from 'react';
import ReactDOM from 'react-dom';

import CommentBox from './src/CommentBox';

ReactDOM.render(
  React.createElement(CommentBox, null),
  document.getElementById('main')
);
