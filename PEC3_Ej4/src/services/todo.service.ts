/**
 * @class Service
 *
 * Manages the data of the application.
 */
type MyObject = Array<{
  text: string,
  complete: boolean
}>;

class TodoService {
  public todos: Array<{ text: string, complete: boolean }>;
  public objectLocalStorage: MyObject;
  constructor() {
    const localStorageValue = localStorage.getItem("todos");
    this.objectLocalStorage = localStorageValue ? JSON.parse(localStorageValue) : null;
    this.todos = (this.objectLocalStorage || []).map(
      todo => new Todo(todo)
    );
  }

  bindTodoListChanged(callback) {
    this.onTodoListChanged = callback;
  }

  _commit(todos) {
    this.onTodoListChanged(todos);
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  addTodo(text) {
    this.todos.push(new Todo({ text }));

    this._commit(this.todos);
  }

  editTodo(id, updatedText) {
    this.todos = this.todos.map(todo =>
      todo.id === id
        ? new Todo({
          ...todo,
          text: updatedText
        })
        : todo
    );

    this._commit(this.todos);
  }

  deleteTodo(_id) {
    this.todos = this.todos.filter(({ id }) => id !== _id);

    this._commit(this.todos);
  }

  toggleTodo(_id) {
    this.todos = this.todos.map(todo =>
      todo.id === _id ? new Todo({ ...todo, complete: !todo.complete }) : todo
    );

    this._commit(this.todos);
  }
}
