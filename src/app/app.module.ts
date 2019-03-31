import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponentComponent } from './book-component/book-component.component';
import { BookService } from './services/book.service';
import { HomeComponent } from './home/home.component';
import { LibraryComponent } from './library/library.component';
import { EditComponentComponent } from './edit-component/edit-component.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComponentComponent,
    HomeComponent,
    LibraryComponent,
    EditComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
