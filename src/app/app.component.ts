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
    this.booksSrv.edit(id);
  }

  public delete(id:number){
   this.booksSrv.delete(id);
  }
}
