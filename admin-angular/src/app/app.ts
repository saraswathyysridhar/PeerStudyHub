import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <h2>CSE Admin Portal</h2>

    <a routerLink="/">Login</a> |
    <a routerLink="/dashboard">Dashboard</a> |
    <a routerLink="/pending">Pending Tips</a> |
    <a routerLink="/approved">Approved Tips</a>

    <hr>

    <router-outlet></router-outlet>
  `
})

export class AppComponent {}