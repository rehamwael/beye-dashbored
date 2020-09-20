import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  showPopUP: boolean;
  showSubPopUP: boolean;
  showPieCharts: boolean;
  constructor() { }

  ngOnInit() {
    this.showPopUP = false;
    this.showSubPopUP = false;
  }

  showPopUp() {
    this.showPopUP = true;
  }

  hidePopUp() {
    this.showPopUP = false;
  }
  showSubList() {
    this.showSubPopUP = true;
  }
  hideSubPopUp() {
    this.showPopUP = false;
    this.showSubPopUP = false;
  }

  showPieChart() {
    if (this.showPieCharts) {
      this.showPieCharts = false;
    } else {
      this.showPieCharts = true;
    }
  }

}
