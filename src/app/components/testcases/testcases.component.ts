import { Component, Input } from '@angular/core';
import { Project, TestCase } from 'src/app/models/interfaces';

@Component({
  selector: 'app-testcases',
  templateUrl: './testcases.component.html',
  styleUrls: ['./testcases.component.scss']
})
export class TestcasesComponent {
@Input()id:any;
@Input()products:TestCase[]=[];

headers=[
  'Input 1','Input 2','Result','Status'
];
cols:any=[
  "input1", "input2", "result", "status"

]
ngOnInit(){
  
}
getStatusColor(status:string):string{
switch(status){
  case 'SUCCESS':
    return 'green';
  case 'FAILURE':
    return 'red';
  case 'BLOCKED':
    return 'blue';
  case 'NOT_EXECUTED':
    return 'magenta';
  default:
    return 'black';
 }
}

}
