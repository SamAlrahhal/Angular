import { Component } from '@angular/core';

@Component({
  selector: 'app-add-word',
  templateUrl: './add-word.component.html',
  styleUrls: ['./add-word.component.scss']
})
export class AddWordComponent {
  myButtonClick() {
    this.userWord = '';
}

  public userWord: string = '';

  ngOnInit(): void {
    this.userWord = '';
}

  constructor() { }

  public addWord(): void  {



  }




}
