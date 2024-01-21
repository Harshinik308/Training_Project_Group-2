import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project, TestCase } from 'src/app/models/interfaces';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
constructor(private activatedRoute:ActivatedRoute){}
id:any;
projectTitle:Project[]=[];
ngOnInit(){
  this.getId();
  this.getFilteredResponse();
  this.getProjectTitle();
}

dummyData:TestCase[] = [
  {
    "id": 14,
    "input1": "4",
    "input2": "10",
    "result": "14",
    "status": "Passed",
    "projectEntity": 1
  },
  {
    "id": 14,
    "input1": "4",
    "input2": "10",
    "result": "14",
    "status": "Not Executed",
    "projectEntity": 3
  }, {
    "id": 14,
    "input1": "4",
    "input2": "10",
    "result": "14",
    "status": "Failed",
    "projectEntity": 2
  }, {
    "id": 14,
    "input1": "4",
    "input2": "10",
    "result": "14",
    "status": "Blocked",
    "projectEntity": 1
  }, {
    "id": 14,
    "input1": "4",
    "input2": "10",
    "result": "14",
    "status": "Passed",
    "projectEntity": 1
  }, {
    "id": 14,
    "input1": "4",
    "input2": "10",
    "result": "14",
    "status": "Failed",
    "projectEntity": 2
  }, {
    "id": 14,
    "input1": "4",
    "input2": "10",
    "result": "14",
    "status": "Not Executed",
    "projectEntity": 3
  },
];
products1:Project[]=[
  {
    "id": 1,
    "projectTitle": "Addition",
    "description": "Addition of two numbers",
  },
  {
    "id": 2,
      "projectTitle": "Subtraction",
      "description": "Subtraction of two numbers"
  },
  {
    "id": 3,
    "projectTitle": "Multiplication",
    "description": "Multiplication of two numbers"
  }
];
products:TestCase[]=[];
getId(){
  this.activatedRoute.paramMap.subscribe((response)=>{
    this.id=response.get('id');
  })
}
getFilteredResponse(){
  this.products=this.dummyData.filter((response)=>{
    return response.projectEntity==this.id;
  })
}
getProjectTitle(){
  this.projectTitle=this.products1.filter((response:any)=>{
    if(response.id==this.id)
    return response;
  })
  
}
}
