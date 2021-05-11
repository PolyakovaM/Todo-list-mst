import { 
  cast, 
  destroy, 
  Instance, 
  types 
} from "mobx-state-tree"
import { persistInLocalStorage } from "mobx-state-tree-localstorage"

const Todo = types
  .model('Todo', {
    name: types.string,
    finishedTask: false,
    filterValue: true
  })
  .actions(self => ({
    taskToggle() {
      self.finishedTask = !self.finishedTask
    },
    itemFilter(value: boolean) {
      self.filterValue = value
    }
  }))

const TodoStore = types
  .model('TodoStore', {
    todos: types.array(Todo)
  })
  .actions(self => ({
    addNewTask(name: string) {
      self.todos.push({ name })
    },
    deleteTodoList() {
      self.todos = cast([])
    },
    deleteItem(todo: ITodo) {
      destroy(todo)
    },
  }))

export const store = persistInLocalStorage({
  tree: TodoStore,
  id: 'TodoStore',
  initialState: {
    todos: [
      {
        name: 'Write code'
      }
    ]
  }
})

export interface ITodo extends Instance <typeof Todo> {}