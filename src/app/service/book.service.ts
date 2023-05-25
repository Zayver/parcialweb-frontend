import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../model/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }


  listAll(){
    return this.http.get<Book[]>("http://localhost:8085/book/all")
  }

  addBook(book: Book){
    return this.http.post("http://localhost:8085/book/create", book)
  }
}
