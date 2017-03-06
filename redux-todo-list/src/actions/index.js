let nextTodoId = 0;

export const ACAddTodo = ( text ) => {
    return {
        type: 'ADD_TODO',
        id: nextTodoId++,
        text,
        completed: false
    }
};

export const ACToggleTodo = ( id ) => {
    return {
        type: 'TOGGLE_TODO',
        id
    }
};

export const ACSetVisibilityFilter = ( filter ) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
};

export const ACDeleteTodo = ( id ) => {
    return {
        type: 'DELETE_TODO',
        id
    }
};

