// app.js

require('./app.less');

import React from 'react';
import { render } from 'react-dom';

import CommentBox from './src/CommentBox';

const data = [
  { id: 1, author: 'Pete Hunt', text: 'This is one comment' },
  { id: 2, author: 'Jordan Walke', text: 'This is *another* comment' },
];

render(
  <CommentBox data={data} />,
  document.getElementById('main')
);
