import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateTodo } from '../redux/actions/todoActions';
import { Input, Button, Select, DatePicker } from 'antd';
import moment from 'moment';

const EditTodo = ({ todo, setEditing }) => {
    const [title, setTitle] = useState(todo.title);
    const [priority, setPriority] = useState(todo.priority);
    const [deadline, setDeadline] = useState(todo.deadline ? moment(todo.deadline) : null);
    const dispatch = useDispatch();

    const handleUpdate = (e) => {
        e.preventDefault();
        dispatch(updateTodo({ ...todo, title, priority, deadline: deadline ? deadline.format('YYYY-MM-DD') : '' }));
        setEditing(false);
    };

    return (
        <form onSubmit={handleUpdate} style={{ display: 'flex', alignItems: 'center' }}>
            <Input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                style={{ marginRight: '10px' }}
            />
            <Select
                value={priority}
                onChange={setPriority}
                style={{ marginRight: '10px' }}
            >
                <Select.Option value="High">High</Select.Option>
                <Select.Option value="Medium">Medium</Select.Option>
                <Select.Option value="Low">Low</Select.Option>
            </Select>
            <DatePicker
                value={deadline}
                onChange={setDeadline}
                style={{ marginRight: '10px' }}
            />
            <Button type="primary" htmlType="submit">
                Update
            </Button>
        </form>
    );
};

export default EditTodo;
