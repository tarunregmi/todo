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

  check: any = false;

  constructor(public todo_: TodoService) {}

  ngOnInit() {
    this.todos = this.todo_.todos;

    // setInterval(() => console.log(this.check), 2000)
  }
}
