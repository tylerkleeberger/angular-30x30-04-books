import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

const BASE_URL = 'http://localhost:3000'

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  model = 'books'

  constructor(private http: HttpClient,) { }

  private getUrl() {
    return `${BASE_URL}/${this.model}`;
  }

  private getUrlWithID(id) {
    return `${this.getUrl()}/${id}`;
  }

  all() {
    return this.http.get(this.getUrl());
  }

  find(id) {
    return this.http.get(this.getUrlWithID(id));
  }

  create(book) {
    return this.http.post(this.getUrl(), book);
  }

  update(book) {
    return this.http.put(this.getUrlWithID(book.id), book);
  }

  delete(id) {
    return this.http.delete(this.getUrlWithID(id));
}
}
