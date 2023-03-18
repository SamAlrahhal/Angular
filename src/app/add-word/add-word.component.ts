import { Component } from '@angular/core';

@Component({
  selector: 'app-add-word',
  templateUrl: './add-word.component.html',
  styleUrls: ['./add-word.component.scss']
})
export class AddWordComponent {

      //variables
  public userWord: string = '';
  public words: string[] = [];
  public sentinceBtn:string = 'Show Sentince';

  constructor() { }


     //functions
  myButtonClick() {
    this.words.push(this.userWord);
    this.userWord = '';
  }

  showSentinceClick() {
    if (this.sentinceBtn == 'Hide Sentince') {
      this.sentinceBtn = 'Show Sentince';
      this.userWord = '';
      this.words = [];
      return;
    }
    this.userWord = this.words.join(' ');
    this.sentinceBtn = 'Hide Sentince';
  }

  ngOnInit(): void {
    this.userWord = '';
}




}
