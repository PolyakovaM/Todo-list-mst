import React from 'react'
import { observer } from 'mobx-react-lite'

import { ITodo } from '../store/todoStore'

import { 
  CheckboxInput,
  CrossedOutText,
  EmptyDiv,
  ListItem,
  RemoveListItem,
} from './toDoStyles'

type ToDoItemTypes = {
  todo: ITodo,
  deleteItem: (todo: ITodo) => void
}

export const ToDoItem = observer(({
  todo,
  deleteItem
}: ToDoItemTypes) => {

  const {
    taskToggle,
    finishedTask,
    name,
    filterValue 
  } = todo

  return (
    <ListItem 
      displayValue={filterValue}
    >
      <CheckboxInput 
        type='checkbox'
        checked={finishedTask}
        onChange={taskToggle}
      />
      <CrossedOutText 
        checked={finishedTask}
      >
        {name}
      </CrossedOutText>
      <EmptyDiv>
        <RemoveListItem onClick={() => deleteItem(todo)}>delete</RemoveListItem>
      </EmptyDiv>
    </ListItem>
  )
})
