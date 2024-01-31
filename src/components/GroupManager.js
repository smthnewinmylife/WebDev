import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addGroup } from '../redux/actions/todoActions'; 

const GroupManager = () => {
  const [groupName, setGroupName] = useState('');
  const dispatch = useDispatch();

  const handleAddGroup = () => {
    if (!groupName.trim()) return;
    dispatch(addGroup({ name: groupName }));
    setGroupName('');
  };

  return (
    <div>
      <input 
        type="text" 
        value={groupName} 
        onChange={(e) => setGroupName(e.target.value)} 
        placeholder="Назва групи" 
      />
      <button onClick={handleAddGroup}>Створити Групу</button>
    </div>
  );
};

export default GroupManager;
