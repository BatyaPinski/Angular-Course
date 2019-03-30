import { Injectable } from '@angular/core';
import { Book } from './../model/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  bookList: Array<Book> = [{
      id:1,
      author: 'Suzanne Collins',
      date: new Date('September 14th 2018'),
      name: 'The Hunger Games'
    },
    {
      id:2,
      author: 'Jane Austen',
      date: new Date('January 28th 1813'),
      name: 'Pride and Prejudice'
    },
    {
      id:3,
      author: 'George Orwell',
      date: new Date('August 1945'),
      name: 'Animal Farm'
    }
    ];
  constructor() { }

  public getAll(){
   return this.bookList;
  }
}
