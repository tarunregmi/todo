import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'tr-adder',
  templateUrl: './adder.component.html',
  styleUrls: ['./adder.component.scss']
})
export class AdderComponent {
  adderForm: FormGroup = new FormGroup({
    todo: new FormControl<string>('', Validators.required),
  });

  constructor (private todo_: TodoService) {}

  onSubmit() {
    if (this.adderForm.valid) {
      this.todo_.addTodo({
        text: this.adderForm.value['todo'],
        completed: false
      });
      this.adderForm.reset();
    }
  }
}
