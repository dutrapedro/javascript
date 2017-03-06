import React, { Component } from 'react';
import Navbar from './navbar';
import AddTodo from '../containers/add-todo';
import VisibleTodoList from '../containers/visible-todo-list'

class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <AddTodo />
                <VisibleTodoList />
            </div>
        );
    }
}

export default App;