import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pending',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="page-container">

      <h2 class="page-title">{{ title }}</h2>

      <div *ngIf="tips.length === 0" class="empty-state">
        No tips found
      </div>

      <div class="cards-container">
        <div *ngFor="let tip of tips" class="card">
          <h3>{{ tip.topic || 'No Topic' }}</h3>
          <p>{{ tip.text || 'No Content' }}</p>

          <div class="card-actions">
            <button (click)="approveTip(tip.id)">Approve</button>
            <button (click)="deleteTip(tip.id)">Delete</button>
          </div>
        </div>
      </div>

    </div>
  `,
  styles: [`
    .page-container {
      padding: 20px;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      text-align: center;
      background-color: #bed7f4;
    }

    .page-title {
      margin-bottom: 25px;
      color: #031c37;
      font-family: Geneva;
    }

    .empty-state {
      color: #0a0101;
      font-size: 18px;
      margin-top: 40px;
    }

    .cards-container {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      justify-content: center;
      max-height: 75vh;
      overflow-y: auto;
      padding-bottom: 10px;
    }

    .card {
      width: 300px;
      padding: 15px;
      border-radius: 10px;
      background: #cbe3f9;
      box-shadow: 0 4px 10px rgba(0,0,0,0.1);
      flex-shrink: 0;
      text-align: left;
    }

    .card h3 {
      margin-bottom: 8px;
      color: #333;
    }

    .card p {
      color: #170303;
      font-size: 14px;
      margin-bottom: 10px;
    }

    .card-actions {
      display: flex;
      gap: 10px;
    }

    .card-actions button {
      padding: 8px 12px;
      background-color: rgb(85, 110, 222);
      color: white;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      transition: background 0.2s;
      font-size: 14px;
    }

    .card-actions button:hover {
      background: #051a30;
    }
  `]
})
export class PendingTips implements OnInit {

  title = "Pending Tips";

  tips: any[] = [];

  // ✅ YOUR LIVE BACKEND URL
  private BASE_URL = "https://peerstudyhub-backend.onrender.com";

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadTips();
  }

  loadTips() {
    this.http.get<any[]>(`${this.BASE_URL}/pending`)
      .subscribe(data => {
        console.log("DATA RECEIVED:", data);
        this.tips = data.filter(t => t !== null);
      });
  }

  approveTip(id: number) {
    this.http.post(`${this.BASE_URL}/approve/${id}`, {})
      .subscribe(() => {
        alert("Approved!");
        this.loadTips();
      });
  }

  deleteTip(id: number) {
    this.http.delete(`${this.BASE_URL}/delete/${id}`)
      .subscribe(() => {
        alert("Deleted!");
        this.loadTips();
      });
  }

}