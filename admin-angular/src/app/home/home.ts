import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="home-container">
      <h2 class="page-title">Welcome to CSE Admin Portal</h2>

      <!-- Carousel -->
      <div class="carousel">
        <div class="carousel-track" [style.transform]="
              'translateX(-' + currentIndex * 100 + '%)'">
          <div class="carousel-item" *ngFor="let img of images">
            <img [src]="img" alt="Slide" />
          </div>
        </div>

        <!-- Navigation -->
        <button class="nav prev" (click)="prev()">&#10094;</button>
        <button class="nav next" (click)="next()">&#10095;</button>
      </div>
    </div>
  `,
  styles: [`
    .home-container {
      max-width: 900px;
      margin: 0 auto;
      padding: 10px;
      text-align: center;
      font-family: Tahoma;
      background-color: #afd1f9;
    }

    .page-title {
      color: #007bff;
      margin-bottom: 20px;
      font-size: 28px;
    }

    .carousel {
      position: relative;
      overflow: hidden;
      border-radius: 10px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }

    .carousel-track {
      display: flex;
      transition: transform 0.5s ease-in-out;
    }

    .carousel-item {
      min-width: 100%;
      flex-shrink: 0;
    }

    .carousel-item img {
      width: 100%;
      height: 500px;
      object-fit: cover;
      border-radius: 10px;
    }

    .nav {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background: rgba(0,0,0,0.5);
      color: white;
      border: none;
      padding: 10px 15px;
      cursor: pointer;
      border-radius: 50%;
      font-size: 24px;
    }

    .prev { left: 10px; }
    .next { right: 10px; }

    .nav:hover {
      background: rgba(0,0,0,0.8);
    }
  `]
})
export class HomeComponent {

  images = [
    'https://mettasurendhar.github.io/anna_univ/images/slide1.jpeg',
    'https://i.ytimg.com/vi/fkRNC6eJ4jA/oardefault.jpg?sqp=-oaymwEkCJUDENAFSFqQAgHyq4qpAxMIARUAAAAAJQAAyEI9AICiQ3gB&rs=AOn4CLChIsrYyEQ0Ou2l7PQRMxTuxtfTAQ',
   
    'https://play-lh.googleusercontent.com/l1PnNdD3GeCg3a04TXI1ezbO-MKoFneF3V3ZZ2dHKowZeSmDSFOBRMlUQUO9-ePD1FPt=w220',
    'https://in.images.search.yahoo.com/images/view;_ylt=Awrx.Tuu3rtpceAReoO9HAx.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzFmNTc4MWViZjlkMDA1MmJkODIzZjdiZDk0M2YwNzQ4BGdwb3MDMzAEaXQDYmluZw--?back=https%3A%2F%2Fin.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Danna%2Buniversiy%2Bceg%2Bcse%2Bdept%2Bpic%26ei%3DUTF-8%26type%3DE210IN826G0%26fr%3Dmcafee%26fr2%3Dp%253As%252Cv%253Ai%252Cm%253Asb-top%26tab%3Dorganic%26ri%3D30&w=1400&h=500&imgurl=ceg.annauniv.edu%2FOld_Website_Kulo%2Fimages%2Fslideshow%2Flarge%2F5.jpg&rurl=https%3A%2F%2Fceg.annauniv.edu%2FOld_Website_Kulo%2F&size=474KB&p=anna+universiy+ceg+cse+dept+pic&oid=1f5781ebf9d0052bd823f7bd943f0748&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&fr=mcafee&tt=CEG+Campus%2C+Anna+University%2C+Chennai-25&b=0&ni=160&no=30&ts=&tab=organic&sigr=D44bJrb4.mtk&sigb=Zp2FS6UXiEvd&sigi=MpTU7vxxVETZ&sigt=jsj7UAar8qfr&.crumb=xvOB0x7IjFj&fr=mcafee&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&type=E210IN826G0'
  ];

  currentIndex = 0;

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prev() {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

}