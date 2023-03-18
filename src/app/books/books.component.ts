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
      img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FThe_Hobbit_%2528film_series%2529&psig=AOvVaw3IyKC6ktQNoDeCtGL34mVU&ust=1679221878288000&source=images&cd=vfe&ved=https://upload.wikimedia.org/wikipedia/en/a/a9/The_Hobbit_trilogy_dvd_cover.jpg"
    }
    if(this.book.genre == "nuts"){
      this.bgCollor = 'red';
    }

  }



}
