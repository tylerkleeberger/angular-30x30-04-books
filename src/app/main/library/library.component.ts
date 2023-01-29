import { Component, OnInit } from '@angular/core';
import { Model } from '../model';
import { Books } from '../model-data';
import { BooksService } from '../services/books.service';

const emptyBook: Model = {
  id: '',
  title: '',
  author: ''
}

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit{
  newBook = emptyBook;
  books = Books;


  constructor(private booksService: BooksService ) { }

  ngOnInit(): void {
    this.fetchBooks();
  }

  fetchBooks() {
    this.booksService.all().subscribe((result:any) => this.books = result);
  }

  saveBook(item) {
    this.booksService.create(item).subscribe(result => this.fetchBooks());
  }

  deleteBook(itemId) {
    this.booksService.delete(itemId).subscribe(result => this.fetchBooks());

  }



}
