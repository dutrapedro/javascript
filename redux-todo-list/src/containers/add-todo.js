import AddTodoForm from '../components/add-todo-form';

import { connect } from 'react-redux';
import { ACAddTodo } from '../actions';


const mapDispatchToProps = ( dispatch ) => {
  return {
    onAddClick: ( text ) => {
      dispatch( ACAddTodo( text ) );
    }
  };
};

export default connect(null, mapDispatchToProps)(AddTodoForm);