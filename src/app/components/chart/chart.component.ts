import { Component,Input, SimpleChanges } from '@angular/core';
import { Project, TestCase } from 'src/app/models/interfaces';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent {
  @Input()id:any;
  @Input()products:TestCase[]=[];
  @Input()projectTitle:any
  @Input()chartData:any;
  title:any;
  options: any;
  data: any;
  
  ngOnInit() {
     this.showPieChart(); 
  }
  ngOnChanges(changes: SimpleChanges) {
    // Use ngOnChanges to react to changes in input properties
    if (changes) {
      this.showPieChart();
    }
  }
  showPieChart(){
    const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--text-color');
      this.data = {
          labels: ['SUCCESS', 'FAILURE','NOT_EXECUTED'],
          datasets: [
              {   
                  data:this.chartData,
                  backgroundColor: [documentStyle.getPropertyValue('--green-500'),documentStyle.getPropertyValue('--red-500'),documentStyle.getPropertyValue('--blue-500')],
                  hoverBackgroundColor: [documentStyle.getPropertyValue('--green-400'), documentStyle.getPropertyValue('--red-400'),documentStyle.getPropertyValue('--blue-400')]
              }
          ]
      };
      this.options = {
          cutout: '60%',
          plugins: {
              legend: {
                  labels: {
                      color: textColor
                  }
              }
          }
      };
     
  }
  
}
