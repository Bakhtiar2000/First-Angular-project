import { Component, Input } from '@angular/core';

@Component({
  // @Component is a class decorator
  selector: 'app-alert',
  imports: [],
  templateUrl: './alert.html',
  styleUrl: './alert.css',
})
export class Alert {
  @Input() alertType: string = ''; // @Input() is a property decorator
  @Input() message: string = ''
}
