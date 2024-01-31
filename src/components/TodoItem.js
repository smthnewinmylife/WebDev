import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleComplete } from '../redux/actions/todoActions';
import EditTodo from './EditTodo';
import { Button } from 'antd';

const TodoItem = ({ todo }) => {
    const [isEditing, setIsEditing] = useState(false);
    const dispatch = useDispatch();

    // Функция для отображения уведомления
    const showReminder = (time) => {
        setTimeout(() => {
            alert(`Reminder for task: ${todo.title}`);
        }, new Date(time).getTime() - new Date().getTime());
    };

    useEffect(() => {
        if (todo.reminder) {
            showReminder(todo.reminder);
        }
    }, [todo.reminder]);

    const handleDelete = () => {
        dispatch(deleteTodo(todo.id));
    };

    const handleComplete = () => {
        dispatch(toggleComplete(todo.id));
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
            {isEditing ? (
                <EditTodo todo={todo} setEditing={setIsEditing} />
            ) : (
                <>
                    <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                        {todo.title} - Group: {todo.group} - Priority: {todo.priority} - Deadline: {todo.deadline || 'None'}
                        {todo.file && <a href={todo.file} target="_blank" rel="noopener noreferrer"> View File</a>}
                    </span>
                    <div>
                        <Button type="primary" onClick={handleComplete} style={{ marginRight: '10px' }}>
                            {todo.completed ? 'Mark Incomplete' : 'Mark Complete'}
                        </Button>
                        <Button type="danger" onClick={handleDelete} style={{ marginRight: '10px' }}>
                            Delete
                        </Button>
                        <Button onClick={() => setIsEditing(true)}>Edit</Button>
                    </div>
                </>
            )}
        </div>
    );
};

export default TodoItem;
