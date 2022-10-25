import { Component, OnInit } from '@angular/core';

import { AppComponent } from '../app.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  constructor(public appCompMethods: AppComponent) {}

  ngOnInit(): void {}
}
