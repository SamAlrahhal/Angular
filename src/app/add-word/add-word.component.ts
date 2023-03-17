import { Component } from '@angular/core';

@Component({
  selector: 'app-add-word',
  templateUrl: './add-word.component.html',
  styleUrls: ['./add-word.component.scss']
})
export class AddWordComponent {
  myButtonClick() {
    this.words.push(this.userWord);
    this.userWord = '';
  }

  showSentinceClick() {
    this.userWord = this.words.join(' ');
  }

  public userWord: string = '';
  public words: string[] = [];

  ngOnInit(): void {
    this.userWord = '';
}

  constructor() { }


}
