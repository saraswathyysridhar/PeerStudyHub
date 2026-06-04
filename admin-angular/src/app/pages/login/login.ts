import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div style="text-align:center; margin-top:100px; font-family: Geneva;color: #051e38;background-color: #c4ddf8;">
      <h2>Admin Login</h2>
      <input placeholder="Username" [(ngModel)]="username" style="margin:10px; padding:8px;">
      <br>
      <input type="password" placeholder="Password" [(ngModel)]="password" style="margin:10px; padding:8px;">
      <br>
      <button (click)="login()" style="padding:8px 15px; background:#007bff; color:white; border:none;background-color: #11365e;">
        Login
      </button>
     
    </div>
  `
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private router: Router) {}

  login() {
    if (this.username === 'admin' && this.password === 'admin') {
      // Save login session
      localStorage.setItem('adminLoggedIn', 'true');
      this.router.navigate(['/pending']); // go to Pending Tips after login
    } else {
      alert('Invalid login');
    }
  }
}
export function isLoggedIn() {
  return localStorage.getItem('adminLoggedIn') === 'true';
}