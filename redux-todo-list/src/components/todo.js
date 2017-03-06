import React from 'react';

const Todo = ( { onClick, completed, text } ) => (
  <li
    onClick={ onClick }
    style={ { color: completed ? 'green' : 'black' } }
  >
    { text }
  </li>
)

export default Todo;