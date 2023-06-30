import React from 'react';
import { ITodo } from 'apis/todo';
import TodoItem from './TodoItem';
import * as S from './TodoList.style'

interface TodoItemProps {
  todos: ITodo[];
  getTodoList: () => Promise<void>;
}
const TodoList = ({ todos, getTodoList }: TodoItemProps) => {
  return (
    <S.TodoListWrap>
      {todos.map((data: ITodo) => (
        <TodoItem key={data.id} todo={data} getTodoList={getTodoList} />
      ))}
    </S.TodoListWrap>
  );
};

export default TodoList;
