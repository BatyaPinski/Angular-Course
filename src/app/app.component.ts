import { Component, OnInit } from '@angular/core';
import { Book } from './model/book';
import { BookService } from './services/book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
 books:Array<Book>;

 constructor(private booksSrv : BookService)
 {

 }
  ngOnInit()
  {
  this.books = this.booksSrv.getAll();
  }

  public edit(id:number)
  {
     let book = this.books.filter(x=> x.id === id)[0];
     this.books.splice(book);
  }
}
