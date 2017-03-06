import React, { Component } from 'react';
const FIRST_LETTER = 0;
const LEFT_LETTERS = 1;
const WHITE_SPACE = ' ';
let input;

class AddTodoForm extends Component {

  constructor(props) {
    super(props);
    this.onAddClick = this.onAddClick.bind(this);
  }

  onAddClick( e ) {
    e.preventDefault()
    if (!input.value.trim()) {
      return
    }

    this.props.onAddClick( this.__handleTodoDescription(input.value) );
    input.value = '';
  }

  render() {

    return(
      <div className='add-todo-form'>
        <input 
          type="text" 
          className="form-control" 
          placeholder="Ex. Pay Credit Card"
          ref={ node => { input = node } } />
        <button 
          type='button' 
          className='btn btn-primary'
          onClick={ this.onAddClick }>
            Add
        </button>
      </div>
    );
  }

  __handleTodoDescription( text ) {
    return text
            .toLowerCase()
            .split(/\s+/)
            .map( word => word[FIRST_LETTER].toUpperCase().concat(word.substr(LEFT_LETTERS)) )
            .join(WHITE_SPACE);
  }
};

export default AddTodoForm