import { Component } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import pluginDataLabels from 'chartjs-plugin-datalabels';
import pluginOutlabels from 'chartjs-plugin-piechart-outlabels';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})

export class PieChartComponent {
  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      display: false
    },
    plugins: {
      datalabels: {
        color: '#FFF',
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
      outlabels: {
        lineWidth: 1,
        lineColor: '#1d90ff',
        font: {
            resizable: false,
            size: 18
        },
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        color: '#1d90ff',
        stretch: 20,
        padding: 40,
        text: '%p'
      }
    },
  };
  public pieChartLabels: Label[] = ['DATA 01', 'DATA 02', 'DATA 03', 'DATA 04'];
  public pieChartData: number[] = [30, 40, 50, 20];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [pluginDataLabels, pluginOutlabels];
  public pieChartColors = [
    {
      backgroundColor: ['#8096bf', '#3f51b5', '#1d90ff', '#153d65'],
    },
  ];

  constructor() { }

  ngOnInit() {

  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
