import React, { Component } from 'react';
import Todo from './todo';

class TodoList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='todo-list'>
        <table className='table table-bordered table-hover'>
          <thead>
            <tr>
              <th>#</th>
              <th>Descrição</th>
              <th className='col-md-4'>Action</th>
            </tr>
          </thead>

          <tbody>
            {this.props.todos.map(todo =>
            <Todo
              key={todo.id}
              {...todo}
              onClick={ () => this.props.onTodoClick( todo.id ) }
              onDeleteTodo={ () => this.props.onDeleteTodo( todo.id ) }
            />
          )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TodoList;