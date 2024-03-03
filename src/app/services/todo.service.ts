import { Injectable } from '@angular/core';
import { TodoModel } from '../models/todo.model';


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: TodoModel[] = [];

  constructor() {
    if (!localStorage.getItem('todos')) {
      localStorage.setItem('todos', JSON.stringify(this.todos));
    } else {
      this.todos = JSON.parse(String(localStorage.getItem('todos')))
    }
  }

  updateStorage() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  addTodo(todo: TodoModel) {
    this.todos.unshift(todo);
    this.updateStorage();
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1);
    this.updateStorage();
  }
}
