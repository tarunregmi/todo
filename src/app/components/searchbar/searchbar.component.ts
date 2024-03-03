import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'tr-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent {
  @Output() onSearch = new EventEmitter();

  value: string = '';
}
