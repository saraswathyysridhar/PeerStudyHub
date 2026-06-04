import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-approved-tips',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="page-container";background-color:blue;font-family: Geneva;>

      <!-- Page Title -->
      <h2 class="page-title">{{ title }}</h2>

      <!-- Empty state message -->
      <div *ngIf="tips.length === 0" class="empty-state">
        No {{ title.toLowerCase() }} yet
      </div>

      <!-- Cards container -->
      <div class="cards-container">
        <div *ngFor="let tip of tips" class="card">
          <h3>{{ tip.topic }}</h3>
          <p>{{ tip.text }}</p>
          <div *ngIf="tip.studentId || tip.date" class="card-footer">
            <span *ngIf="tip.studentId">Student: {{ tip.studentId }}</span>
            <span *ngIf="tip.date"> | Date: {{ tip.date }}</span>
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
      background-color: #052d58;
    }

    .page-title {
      margin-bottom: 25px;
      color: #efe7e7;
      font-family: Geneva;
       font-size: 28px;
      
    }

    .empty-state {
      color: #140101;
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
      background-color: #c6e2fb;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      flex-shrink: 0;
      text-align: left;
      
    }

    .card h3 {
      margin-bottom: 8px;
      color: #100000;
    }

    .card p {
      color: #1a0000;
      font-size: 14px;
    }

    .card-footer {
      margin-top: 10px;
      font-size: 12px;
      color: #0c0101;
    }
  `]
})
export class ApprovedTipsComponent implements OnInit {

  title = "Approved Tips";
  tips: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>("http://127.0.0.1:5000/approved")
      .subscribe(
        data => {
          this.tips = data.filter(tip => tip !== null);
          console.log("APPROVED:", this.tips);
        },
        err => console.error("Failed to load approved tips", err)
      );
  }
}