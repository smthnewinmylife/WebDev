const initialState = {
    todos: [],
    groups: [],
    loading: false,
    error: null
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_TODOS_REQUEST':
            return { ...state, loading: true, error: null };
        case 'FETCH_TODOS_SUCCESS':
            return { ...state, todos: action.payload, loading: false };
        case 'FETCH_TODOS_FAILURE':
            return { ...state, loading: false, error: action.error };
        case 'ADD_TODO_SUCCESS':
            return {
                ...state,
                todos: [
                    ...state.todos, 
                    {
                        ...action.payload,
                        reminder: action.payload.reminder
                    }
                 ]
             };
        case 'ADD_TODO_FAILURE':
            return { ...state, error: action.error };
        case 'ADD_GROUP':
            return { ...state, groups: [...state.groups, action.payload] };
        case 'DELETE_TODO':
            return { ...state, todos: state.todos.filter(todo => todo.id !== action.payload) };
        case 'TOGGLE_COMPLETE':
            return { ...state, todos: state.todos.map(todo => 
                    todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo) };
        case 'UPDATE_TODO':
            return { ...state, todos: state.todos.map(todo => 
                    todo.id === action.payload.id ? { ...todo, ...action.payload } : todo) };
        default:
            return state;
    }
};

export default todoReducer;
