import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoModel } from 'src/app/models/todo.model';

@Component({
  selector: 'tr-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() todo: TodoModel = { text: '', completed: false }
  @Output() onDelete = new EventEmitter();
  @Output() onCheck = new EventEmitter();
}
