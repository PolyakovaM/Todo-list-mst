import React, { 
  useState, 
  BaseSyntheticEvent, 
  KeyboardEvent 
} from "react";
import { observer } from "mobx-react-lite";

import { store, ITodo } from '../store/todoStore'

import { 
  AddButton, 
  FormsInput, 
  FormStyle, 
  EmptyDiv,
  WarningDiv 
} from "./toDoStyles"

export const AddForm = observer(() => {
  const {
    todos,
    addNewTask,
  } = store

  const [value, setValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('')

  const checkExistValue = () => {
    const isExistValue = todos.find((todo: ITodo) => todo.name === value.trim())
    if (isExistValue) {
      setErrorMessage('Такое дело уже есть! Придумай новое :)')
    } else {
      addNewTask(value.trim())
      setValue('')
      setErrorMessage('')
    }
  }

  const onChange = (e: BaseSyntheticEvent) => {
    setValue(e.currentTarget.value.trimLeft())
    setErrorMessage('')
  }

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter' && value) {
      checkExistValue()
    }
  }

  const onKeyUp = () => {
    todos.forEach((todo: ITodo) => {
      todo.name.toUpperCase().indexOf(value.toUpperCase()) > -1 
        ? todo.itemFilter(true) 
        : todo.itemFilter(false)
    })
  }
  
  const addButton = () => {
    checkExistValue()
    todos.forEach((todo: ITodo) => todo.itemFilter(true))
  }

  return (
    <FormStyle>
      <EmptyDiv>
        <FormsInput 
          type='text' 
          placeholder='New task' 
          onChange={onChange} 
          onKeyDown={onKeyDown}
          value={value}
          onKeyUp={onKeyUp} 
        />
        <AddButton 
          buttonOpacity={value && .7} 
          disabled={!value} 
          onClick={addButton}
        >
          Add
        </AddButton>
      </EmptyDiv>
      {errorMessage && <WarningDiv>{errorMessage}</WarningDiv>}
    </FormStyle>
  )
})
