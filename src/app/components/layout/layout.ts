import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class LayoutComponent {
  router = inject(Router);
  onLogout() {
    this.router.navigateByUrl('login');
    localStorage.removeItem('Angular18');
  }
}
