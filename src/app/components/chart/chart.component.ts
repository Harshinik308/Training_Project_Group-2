import { Component,Input } from '@angular/core';
import { Project, TestCase } from 'src/app/models/interfaces';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent {
  @Input()id:any;
  @Input()products:TestCase[]=[];
  @Input()projectTitle:Project[]=[];
  title:any;
  options: any;
  data: any;
  passCount:number=0;
  failCount:number=0;
  blockedCount:number=0;
  notExecutedCount:number=0;
  ngOnInit() {
     this.getStatusCount(); 
     this.showPieChart(); 
     
     
  }
  showPieChart(){
    const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--text-color');

      this.data = {
          labels: ['Blocked', 'Not executed', 'Passed','Failed'],
          datasets: [
              {
                  data: [this.blockedCount, this.notExecutedCount, this.passCount,this.failCount],
                  backgroundColor: [documentStyle.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--yellow-500'), documentStyle.getPropertyValue('--green-500'),documentStyle.getPropertyValue('--red-500')],
                  hoverBackgroundColor: [documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--yellow-400'), documentStyle.getPropertyValue('--green-400'), documentStyle.getPropertyValue('--red-400')]
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
  getStatusCount(){
    this.products.forEach((response)=>{
       if(response.status==='Passed')
       this.passCount++;
       else if(response.status==='Failed')
       this.failCount++;
       else if(response.status==='Not Executed')
       this.notExecutedCount++;
       else if(response.status==='Blocked')
       this.blockedCount++;
    })
  }
 
}
