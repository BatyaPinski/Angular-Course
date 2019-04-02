import { Injectable } from '@angular/core';
import { Book } from './../model/book';

@Injectable({
  providedIn: 'root'

})
export class BookService {
  bookList: Array<Book> = [{
    id: 1,
    author: 'Suzanne Collins',
    date: new Date('03/14/2018'),
    name: 'The Hunger Games'
  },
  {
    id: 2,
    author: 'Jane Austen',
    date: new Date('01/28/1813'),
    name: 'Pride and Prejudice'
  },
  {
    id: 3,
    author: 'George Orwell',
    date: new Date('08/01/1945'),
    name: 'Animal Farm'
  }
  ];
  constructor() { }

  public getAll() {
    return this.bookList;
  }

  public edit(id: number) {
    let curBook = this.bookList.filter(book => book.id === id);

  }

  public delete(id: number) {
    let curBook = this.bookList.filter(book => book.id === id)[0];
    let index = this.bookList.indexOf(curBook);
    this.bookList.splice(index, 1);
  }

  getItem(id: number) {
    let res = this.bookList.filter(book => book.id === id);
    if (res) {
      return res[0];
    }

    return null;
  }

  add(book: Book) {
    book.id = this.bookList[this.bookList.length - 1].id + 1;
    this.bookList.push(book);
  }

  update(updatedbook: Book) {
    let book = this.getItem(updatedbook.id);
    book.name = updatedbook.name;
    book.author = updatedbook.author;
    book.date = updatedbook.date;
  }

}
