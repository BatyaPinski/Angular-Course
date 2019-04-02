import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../services/book.service';
import { Book } from '../model/book';

@Component({
  selector: 'app-edit-component',
  templateUrl: './edit-component.component.html',
  styleUrls: ['./edit-component.component.sass']
})
export class EditComponentComponent implements OnInit {
  book: Book;
  editMode: boolean;
  constructor(private route: ActivatedRoute,
    private booksSrv: BookService,
    private router: Router) {
      
    this.route.params.subscribe(param => {
      let id = +param["id"];

      if (id) {
        let orgBook = this.booksSrv.getItem(id);
        this.book = { ...orgBook };
        this.editMode = true;
      }
      else {
        this.book = new Book();
      }
    })

  }

  ngOnInit() {
  }


  save() {
    if (this.editMode) {
      this.booksSrv.update(this.book);
    }
    else {
      this.booksSrv.add(this.book);
    }
    this.router.navigate(['../library'], {relativeTo: this.route});
  }
}
