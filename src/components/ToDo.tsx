import React from 'react'
import { observer } from 'mobx-react-lite';

import { AddForm } from './AddForm';
import { ToDoItem } from './ToDoItem';
import { store, ITodo } from '../store/todoStore'

import {
  ButtonDelList, 
  EmptyDiv,
  EmptyHeading,
  List,
  ToDoListStyle
} from './toDoStyles'

export const ToDo = observer(() => {
  const {
    deleteTodoList,
    todos,
    deleteItem
  } = store

  const existValue = todos.find((todo: ITodo) => todo.filterValue)

  return (
    <ToDoListStyle>
      <EmptyHeading>To do List</EmptyHeading>
      <AddForm />
      <EmptyDiv>
        <List>
          {todos.map((todo: ITodo) => (
            <ToDoItem
              deleteItem={deleteItem}
              key={todo.name}
              todo={todo}
            />
          ))} 
        </List>
      </EmptyDiv>
      {todos.length > 0 && existValue 
        && (
          <ButtonDelList onClick={deleteTodoList}>
            Удалить список
          </ButtonDelList>
        )
      }
    </ToDoListStyle>
  )
})
