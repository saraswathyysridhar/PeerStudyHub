import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="login-container">
      <h2>Admin Login</h2>

      <input
        placeholder="Username"
        [(ngModel)]="username"
      />

      <input
        type="password"
        placeholder="Password"
        [(ngModel)]="password"
      />

      <button (click)="login()">
        Login
      </button>
    </div>
  `,
  styles: [`
    .login-container {
      text-align: center;
      margin-top: 100px;
      font-family: Geneva;
      background-color: #c4ddf8;
      color: #051e38;
      padding: 40px;
    }

    input {
      margin: 10px;
      padding: 8px;
    }

    button {
      padding: 8px 15px;
      background-color: #11365e;
      color: white;
      border: none;
      cursor: pointer;
    }

    button:hover {
      background-color: #0a223b;
    }
  `]
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private router: Router) {}

  login() {
    if (this.username === 'admin' && this.password === 'admin') {
      localStorage.setItem('adminLoggedIn', 'true');
      this.router.navigate(['/pending']);
    } else {
      alert('Invalid login');
    }
  }
}

// ✅ AUTH CHECK (keep as guard helper)
export function isLoggedIn() {
  return localStorage.getItem('adminLoggedIn') === 'true';
}