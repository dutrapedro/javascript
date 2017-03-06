import React from 'react';

function handleId( id ) {
  return id + 1;
}

const Todo = ( { onClick, completed, text, id, onDeleteTodo } ) => (
  <tr className={ completed ? 'success' : '' }>
      <th scope='row'>{ handleId( id ) }</th>
      <td onClick={ onClick }>{ text }</td>
      <td className='.col-md-4' style={{ textAlign: 'center' }}>
        <div className='btn-group' role='group' aria-label='...'>
          <button type='button' className='btn btn-warning'>Edit</button>
          <button onClick={ onDeleteTodo } type='button' className='btn btn-danger'>Delete</button>
        </div>
      </td>
  </tr>
)

export default Todo;