import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Label, MultiDataSet } from 'ng2-charts';
import { GraficasServicesService } from '../../services/graficas-services.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styleUrls: ['./dona-http.component.css']
})
export class DonaHttpComponent implements OnInit {

  public doughnutChartLabels: Label[] = [
    //'Download Sales', 'In-Store Sales', 'Mail-Order Sales'
  ];
  public doughnutChartData: MultiDataSet = [
      //[350, 450, 100]
  ];
  public doughnutChartType: ChartType = 'doughnut';

  constructor( private graficasServices: GraficasServicesService) { }

  ngOnInit(): void {
    this.graficasServices.getData()
                          .subscribe(data => {
                            const labels = Object.keys(data);
                            const value = Object.values(data)

                            this.doughnutChartLabels = labels;
                            this.doughnutChartData.push(value);
                          })
  }

}
