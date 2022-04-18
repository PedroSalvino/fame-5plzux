import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor() {}
  @ViewChild('grafico', { static: true }) elemento: ElementRef;

  ngOnInit() {
    new Chart(this.elemento.nativeElement, {
      type: 'bar',
      data: {
        labels: [
          '00h',
          '01h',
          '02h',
          '03h',
          '04h',
          '05h',
          '06h',
          '07h',
          '08h',
          '09h',
          '10h',
          '11h',
          '12h',
          '13h',
          '14h',
          '15h',
          '16h',
          '17h',
          '18h',
          '19h',
          '20h',
          '21h',
          '22h',
          '23h',
        ],
        datasets: [
          {
            label: 'Veículos',
            data: [
              12, 19, 3, 5, 2, 3, 250, 98, 50, 67, 65, 80, 95, 150, 100, 45,
              240, 79, 45, 68, 32, 45, 78, 21,
            ],
            backgroundColor: [
              'rgba(255, 99, 132, 0.7)',
              'rgba(54, 162, 235, 0.7)',
              'rgba(255, 206, 86, 0.7)',
              'rgba(75, 192, 192, 0.7)',
              'rgba(153, 102, 255, 0.7)',
              'rgba(255, 159, 64, 0.7)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
    });
  }
}
