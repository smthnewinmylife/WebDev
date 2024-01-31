import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import TodoForm from './components/TodoForm'; 
import TodoList from './components/TodoList';
import GroupManager from './components/GroupManager'; 
import 'antd/dist/antd.css';
import './styles/App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header>
          <h1>Todo List</h1>
        </header>
        <GroupManager /> 
        <TodoForm />
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
