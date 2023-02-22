import { Todo } from '../types/Todo';
import { client } from '../utils/fetchClient';

export const getTodos = (userId: number) => {
  return client.get<Todo[]>(`/todos?userId=${userId}`);
};

export const createTodo = (title: string, userId: number): Promise<Todo> => {
  return client.post('/todos', {
    userId,
    title,
    completed: false,
  });
};

export const deleteTodo = (todoId: number) => {
  return client.delete(`/todos/${todoId}`);
};

export const updateTodoStatus = (todoId: number, completed: boolean) => {
  return client.patch(`/todos/${todoId}`, { completed });
};

export const updateTodoTitle = (todoId: number, title: string) => {
  return client.patch(`/todos/${todoId}`, { title });
};