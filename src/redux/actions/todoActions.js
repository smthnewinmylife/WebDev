import axios from 'axios';

const mockTodos = [
    { id: 1, title: 'Todo 1', completed: false },
    { id: 2, title: 'Todo 2', completed: false },
];

const mockGroups = [
    { name: 'Group 1' },
    { name: 'Group 2' },
];

export const fetchTenTodos = () => (dispatch) => {
    dispatch({ type: 'FETCH_TODOS_REQUEST' });
    try {
        const todos = mockTodos.slice(0, 10);
        dispatch({ type: 'FETCH_TODOS_SUCCESS', payload: todos });
    } catch (error) {
        dispatch({ type: 'FETCH_TODOS_FAILURE', error });
    }
};

export const addGroup = (group) => ({
    type: 'ADD_GROUP',
    payload: group
});

export const fetchTodos = () => (dispatch) => {
    dispatch({ type: 'FETCH_TODOS_REQUEST' });
    try {
        const todos = mockTodos;
        dispatch({ type: 'FETCH_TODOS_SUCCESS', payload: todos });
    } catch (error) {
        dispatch({ type: 'FETCH_TODOS_FAILURE', error });
    }
};

export const addTodo = (formData) => (dispatch) => {
    const newTodo = { 
        id: mockTodos.length + 1, 
        title: formData.get('title'), 
        group: formData.get('group'), 
        priority: formData.get('priority'),
        deadline: formData.get('deadline'),
        file: formData.get('file')
    };
    mockTodos.push(newTodo);
    dispatch({ type: 'ADD_TODO_SUCCESS', payload: newTodo });
};

export const deleteTodo = (id) => ({
    type: 'DELETE_TODO',
    payload: id
});

export const toggleComplete = (id) => ({
    type: 'TOGGLE_COMPLETE',
    payload: id
});

export const updateTodo = (todo) => ({
    type: 'UPDATE_TODO',
    payload: todo
});
