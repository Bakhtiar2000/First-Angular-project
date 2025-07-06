import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class LoginComponent {
  loginObj: any = {
    email: '',
    password: '',
  };
  router = inject(Router);
  onLogin() {
    if (this.loginObj.email == 'admin' && this.loginObj.password == 'admin') {
      this.router.navigateByUrl('/client');
      localStorage.setItem('Angular18', this.loginObj.email);
    } else {
      alert('Wrong credentials!');
    }
  }
}
