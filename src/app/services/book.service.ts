import { Injectable } from '@angular/core';
import { Book } from './../model/book';

@Injectable({
  providedIn: 'root'
  
})
export class BookService {
  bookList: Array<Book> = [{
      id:1,
      author: 'Suzanne Collins',
      date: new Date('03/14/2018'),
      name: 'The Hunger Games'
    },
    {
      id:2,
      author: 'Jane Austen',
      date: new Date('01/28/1813'),
      name: 'Pride and Prejudice'
    },
    {
      id:3,
      author: 'George Orwell',
      date: new Date('08/01/1945'),
      name: 'Animal Farm'
    }
    ];
  constructor() { }

  public getAll(){
   return this.bookList;
  }

  public edit(id:number)
  {  
    let curBook = this.bookList.filter(book => book.id === id);
   
  }

  public delete(id:number){
    let curBook = this.bookList.filter(book => book.id === id)[0];
  let index = this.bookList.indexOf(curBook);
  this.bookList.splice(index, 1);
  }
}
