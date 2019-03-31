import { Component, OnInit } from '@angular/core';
import { Book } from '../model/book';
import { BookService } from '../services/book.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.sass']
})
export class LibraryComponent implements OnInit {
  books:Array<Book>;

  constructor(private booksSrv : BookService, private router:Router, private route:ActivatedRoute)
  {
 
  }
 

  ngOnInit()
  {
  this.books = this.booksSrv.getAll();
  }

  public edit(id:number)
  {  
    this.router.navigate(["../edit", id], {relativeTo:this.route});
  }

  public delete(id:number){
   this.booksSrv.delete(id);
  }
}
