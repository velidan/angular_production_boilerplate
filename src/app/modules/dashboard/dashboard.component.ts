import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  public title: string = "Nucleous Admin Dashboard";

  constructor() { }

  ngOnInit() { }
}