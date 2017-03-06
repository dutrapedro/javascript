import React, { Component } from 'react';
import Todo from './todo';

class TodoList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='todo-list'>
        <ul>
          {this.props.todos.map(todo =>
            <Todo
              key={todo.id}
              {...todo}
              onClick={ () => this.props.onTodoClick(todo.id) }
            />
          )}
        </ul>
      </div>
    );
  }
}

export default TodoList;