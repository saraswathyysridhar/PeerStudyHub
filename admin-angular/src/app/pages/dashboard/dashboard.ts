import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="page-container">

      <h2 class="page-title">Dashboard</h2>

      <!-- Navigation Buttons -->
      <div class="quick-actions">
        <button (click)="goTo('home')">Home</button>
        <button (click)="goTo('pending')">Pending Tips</button>
        <button (click)="goTo('approved')">Approved Tips</button>
      </div>

      <!-- Dashboard Cards -->
      <div class="cards-container">
        <div class="card">
          <h3>Pending Tips</h3>
          <p>{{ pendingCount }}</p>
        </div>

        <div class="card">
          <h3>Approved Tips</h3>
          <p>{{ approvedCount }}</p>
        </div>
      </div>

    </div>
  `,
  styles: [`
    .page-container {
      max-width: 900px;
      margin: 0 auto;
      padding: 20px;
      text-align: center;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        background-color: #bdd2ec;
    }

    .page-title {
      color: #010b15;
      margin-bottom: 25px;
      font-size: 28px;
         font-family:Geneva;
    }

    .quick-actions {
      margin-bottom: 30px;
      display: flex;
      gap: 15px;
      justify-content: center;
      flex-wrap: wrap;
    }

    .quick-actions button {
      padding: 10px 20px;
      border-radius: 8px;
      border: none;
      background-color: #2c7ace;
      color: white;
      cursor: pointer;
      transition: 0.2s;
      font-size: 14px;
    }

    .quick-actions button:hover {
      background-color: #00346b;
    }

    .cards-container {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      justify-content: center;
    }

    .card {
      width: 250px;
      padding: 20px;
      border-radius: 10px;
      background: #f8f9fa;
      box-shadow: 0 4px 10px rgba(0,0,0,0.1);
      text-align: center;
         background-color: #9ac5f4;
    }

    .card h3 {
      margin-bottom: 10px;
      color: #333;
    }

    .card p {
      color: #555;
      font-size: 20px;
      font-weight: bold;
    }
  `]
})
export class DashboardComponent implements OnInit {

  pendingCount = 0;
  approvedCount = 0;

  // Backend URL
  backendUrl = "http://127.0.0.1:5000";

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit() {
    this.loadCounts();
  }

  goTo(page: string) {
    this.router.navigate([`/${page}`]);
  }

  loadCounts() {
    // Fetch Pending Tips
    this.http.get<any[]>(`${this.backendUrl}/pending`)
      .subscribe(data => {
        this.pendingCount = data.filter(t => t !== null).length;
      }, err => console.error("Error loading pending tips:", err));

    // Fetch Approved Tips
    this.http.get<any[]>(`${this.backendUrl}/approved`)
      .subscribe(data => {
        this.approvedCount = data.filter(t => t !== null).length;
      }, err => console.error("Error loading approved tips:", err));
  }

}