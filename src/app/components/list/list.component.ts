import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/model/book.model';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  books: Book[] = []


  constructor(private bookS: BookService){}
  ngOnInit(): void {
    this.bookS.listAll().subscribe({
      next: (v)=> this.books = v
    })
  }
}
