import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { ChartsModule, ThemeService } from 'ng2-charts';
import { LineChartTwoComponent } from './line-chart-two/line-chart-two.component';
import { LineChartThreeComponent } from './line-chart-three/line-chart-three.component';
import { LineChartFourComponent } from './line-chart-four/line-chart-four.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LineChartComponent,
    LineChartTwoComponent,
    LineChartThreeComponent,
    LineChartFourComponent,
    PieChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [ThemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
