import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Book } from 'src/app/model/book.model';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
  book: Book = new Book


  constructor(private bookS: BookService, private router: Router){}

  submit(){
    this.bookS.addBook(this.book).subscribe({
      next: ()=>{
        setTimeout(()=>{
          this.router.navigate([""])
        }, 1000)
      }
    })
  }
}
