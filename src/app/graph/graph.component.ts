import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { authAppState } from '../interfaces/responses.interfaces';

import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css'],
})
export class GraphComponent implements OnInit {
  constructor(private store: Store<authAppState>) {}

  ngOnInit(): void {
    const myChart = new Chart('myChart', {
      type: 'bar',
      data: {
        labels: Object.keys(JSON.parse(localStorage.getItem('graphData') || '')),
        datasets: [
          {
            label: 'Assessment Report Chart',
            data: Object.values(JSON.parse(localStorage.getItem('graphData') || '')),
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
}
