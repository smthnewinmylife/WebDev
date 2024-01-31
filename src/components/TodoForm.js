import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/actions/todoActions';
import { Input, Button, Select, DatePicker } from 'antd';
import moment from 'moment';

const TodoForm = () => {
    const [title, setTitle] = useState('');
    const [priority, setPriority] = useState('Medium');
    const [deadline, setDeadline] = useState(null);
    const [reminder, setReminder] = useState(null); 
    const [file, setFile] = useState(null);
    const dispatch = useDispatch();

    const handleAddTodo = () => {
        if (!title.trim()) return;
        const formData = new FormData();
        formData.append('title', title);
        formData.append('priority', priority);
        formData.append('deadline', deadline ? deadline.format('YYYY-MM-DD') : '');
        if (reminder) formData.append('reminder', reminder.toISOString()); 
        if (file) formData.append('file', file);
        dispatch(addTodo(formData));
        setTitle('');
        setPriority('Medium');
        setDeadline(null);
        setFile(null);
        setReminder(null); 
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    return (
        <div>
            <Input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Add a new task..."
                style={{ width: '60%', marginRight: '10px' }}
            />
            <Select
                value={priority}
                onChange={setPriority}
                style={{ width: '20%', marginRight: '10px' }}
            >
                <Select.Option value="High">High</Select.Option>
                <Select.Option value="Medium">Medium</Select.Option>
                <Select.Option value="Low">Low</Select.Option>
            </Select>
            <DatePicker
                onChange={setDeadline}
                style={{ marginRight: '10px' }}
            />
            <input
                type="file"
                onChange={handleFileChange}
                style={{ marginRight: '10px' }}
            />
            <DatePicker
                showTime
                onChange={setReminder}
                format="YYYY-MM-DD HH:mm:ss"
                style={{ marginRight: '10px' }}
            />
            <Button
                type="primary"
                onClick={handleAddTodo}
            >
                Add Todo
            </Button>
        </div>
    );
};

export default TodoForm;
