import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../redux/actions/todoActions';
import { Input, Button, Select, DatePicker, TimePicker } from 'antd';
import moment from 'moment';

const AddTodo = () => {
    const [title, setTitle] = useState('');
    const [group, setGroup] = useState('');
    const [file, setFile] = useState(null);
    const [reminder, setReminder] = useState(null); 
    const groups = useSelector(state => state.groups);
    const dispatch = useDispatch();

    useEffect(() => {
        if (groups.length > 0) {
            setGroup(groups[0].name);
        }
    }, [groups]);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim()) return;
        const formData = new FormData();
        formData.append('title', title);
        formData.append('group', group);
        if (file) formData.append('file', file);
        if (reminder) formData.append('reminder', reminder.format()); 
        dispatch(addTodo(formData));
        setTitle('');
        setGroup(groups.length > 0 ? groups[0].name : '');
        setFile(null);
        setReminder(null);
    };

    return (
        <form onSubmit={handleSubmit} style={{ display: 'flex', marginBottom: '20px' }}>
            <Input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Add a new task..."
                style={{ marginRight: '10px' }}
            />
            <Select value={group} onChange={setGroup} style={{ marginRight: '10px' }}>
                {groups.map(g => (
                    <Select.Option key={g.name} value={g.name}>{g.name}</Select.Option>
                ))}
            </Select>
            <input type="file" onChange={handleFileChange} />
            <TimePicker 
                value={reminder} 
                onChange={setReminder} 
                format="HH:mm" 
                style={{ marginRight: '10px' }}
            />
            <Button type="primary" htmlType="submit">
                Add Todo
            </Button>
        </form>
    );
};

export default AddTodo;
