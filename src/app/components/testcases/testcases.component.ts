import { Component, Input } from '@angular/core';
import { TestCase } from 'src/app/models/interfaces';

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

getStatusColor(status:string):string{
switch(status){
  case 'Passed':
    return 'green';
  case 'Failed':
    return 'red';
  case 'Blocked':
    return 'blue';
  case 'Not Executed':
    return 'magenta';
  default:
    return 'black';
}
}
}
