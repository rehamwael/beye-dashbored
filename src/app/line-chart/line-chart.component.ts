import { Component, } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})

export class LineChartComponent {

  lineChartData: ChartDataSets[] = [
    { data: [25, 22, 30, 25, 27, 25, 22, 30, 20, 30],
      borderCapStyle: 'round',
      borderDashOffset: 0,
      borderJoinStyle: 'round',
      pointBorderWidth: 0,
      pointHoverRadius: 0,
      pointRadius: 0,
      pointHitRadius: 0,
   },
  ];

  lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July' , 'Aug' , 'Sept', 'Oct'];

  lineChartOptions = {
    responsive: true,
    bezierCurve : true,
    plugins: {
      datalabels: {
        display: false
      }
    },
    scales: {
      xAxes: [{
        display: false
      }],
      yAxes: [{
        display: false
      }],
    },
    legend: {
      display: false
    },
  };

  lineChartColors: Color[] = [
    {
      borderColor: '#1D3557',
      backgroundColor: '#f5f5f5',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';
}
