import { Component, OnInit , Input, EventEmitter, Output} from '@angular/core';

import { Book } from './../model/book';

@Component({
  selector: 'app-book-component',
  templateUrl: './book-component.component.html',
  styleUrls: ['./book-component.component.scss']
})
export class BookComponentComponent implements OnInit {
@Input() book: Book;
@Output() editEvent:EventEmitter<number>  = new EventEmitter();

constructor() { }

  ngOnInit() {
  }

  edit(id){
    this.editEvent.emit(id);
  }


}
