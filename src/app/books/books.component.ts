import { Component } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent {
  public bgCollor = '';
  book = {
    title: "",
    author: "",
    genre: "",
    img: ""
  }













  ngOnInit(): void {
    this.book = {
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      genre: "Fantasy",
      img: "https://www.kotaku.com.au/wp-content/uploads/sites/3/2021/01/11/hobbit-1.jpg?quality=80&resize=1280,720"
    }


  }





}
