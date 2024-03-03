import { Component } from '@angular/core';
import { TodoModel } from 'src/app/models/todo.model';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'tr-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  public todos!: TodoModel[];

  constructor(public todo_: TodoService) {}

  ngOnInit() {
    this.todos = this.todo_.todos;
  }

  searchTodo(text: string) {
    if (this.todo_.todos.length) {
      this.todos = this.todo_.todos.filter((todo, i) => {
        return (new RegExp(text, 'gi')).test(todo.text);
      });
    }
  }
}
