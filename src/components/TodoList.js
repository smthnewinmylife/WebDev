import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTenTodos } from '../redux/actions/todoActions'; 
import TodoItem from './TodoItem';
import { Button } from 'antd';

const TodoList = () => {
    const { todos, loading, error } = useSelector((state) => state.todos); 
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTenTodos()); 
    }, [dispatch]);

    const handleFetchTenTodos = () => {
        dispatch(fetchTenTodos()); 
    };

    if (loading) return <p>Loading...</p>; 
    if (error) return <p>Error loading todos!</p>; 

    return (
        <div>
            <Button onClick={handleFetchTenTodos} type="primary" style={{ marginBottom: '20px' }}>
                Добавить задачи
            </Button>
            {todos.length > 0 ? (
                todos.map((todo) => <TodoItem key={todo.id} todo={todo} />) 
            ) : (
                <p>No todos yet!</p> 
            )}
        </div>
    );
};

export default TodoList;
