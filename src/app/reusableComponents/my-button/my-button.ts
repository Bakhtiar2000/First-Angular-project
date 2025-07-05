import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-my-button',
  imports: [],
  templateUrl: './my-button.html',
  styleUrl: './my-button.css',
})
export class MyButton {
  // To send the data from parent(Client.ts) to child(my-button.ts), we use @Input
  @Input() btnText: string = ''; //
  @Input() btnClass: string = '';
  // To send the data/ event(like .emit()) from child(my-button.ts) to parent(Client.ts), we use @Output
  @Output() onBtnClicked = new EventEmitter<any>();

  onCLick() {
    // debugger;
    this.onBtnClicked.emit();
  }
}
