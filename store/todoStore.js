import { types } from "mobx-state-tree";

const Todo = types.model({
  task: types.string,
  finishedTask: false
})

export const TodoStore = types.model({
  todos: types.array(Todo)
})