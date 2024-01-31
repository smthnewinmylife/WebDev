import axios from 'axios';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/todos?_limit=10'
});

export const getTenTodos = async () => {
  try {
      const response = await api.get('/todos?_limit=10');
      return response.data;
  } catch (error) {
      console.error("Error during API call:", error);
      return [];
  }
};

export const getTodos = async () => {
  try {
    const response = await api.get('/todos');
    return response.data;
  } catch (error) {
    console.error("Error during API call:", error);
    return [];
  }
};
