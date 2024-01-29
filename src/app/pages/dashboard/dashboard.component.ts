import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { error } from 'cypress/types/jquery';
import { Project, TestCase } from 'src/app/models/interfaces';
import { ApiService } from 'src/app/services/api.service';
import { LoaderService } from 'src/app/services/loader.service';
import { ToasterService } from 'src/app/services/toaster.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
constructor(private activatedRoute:ActivatedRoute,private api:ApiService,public loader:LoaderService,private alert:ToasterService){}
id:any;
projects:Project[]=[];
project:Project[]=[];
products:TestCase[]=[];
projectTitle:any;

passCount:number=0;
failCount:number=0;
notExecutedCount:number=0;
@Input() data:any=[]

ngOnInit(){
  this.getId();
  this.fetchProjectDetails();
 
}
getId(){
  this.activatedRoute.paramMap.subscribe((response)=>{
    this.id=response.get('id');
  })
}


fetchProjectDetails(){
  this.loader.showLoader();
  this.api.fetchProjectDetails().subscribe({
    next:(response:any)=>{
      this.loader.hideLoader();
      this.projects=response;
      this.getSpecificData();
      this.projectTitle=this.project[0].projectTitle;
      this.getSpecificTestCases();
      this.getStatusCount();
      this.data= [this.passCount,this.failCount, this.notExecutedCount];
      console.log(this.data);
      
      
    },
    error:(error)=>{
      this.loader.hideLoader();
      this.alert.errorAlert();
    }
  })
}

getSpecificData() {
  this.project = this.projects.filter((response: any) => {
    return response.id == this.id;
  });
}
getSpecificTestCases(){
  this.products=this.project[0].testCases;
  
}

getStatusCount(){
  if (this.products && this.products.length > 0) {
    this.products.forEach((response) => {
      if (response.status === 'SUCCESS') {
        this.passCount++;
      } else if (response.status === 'FAILURE') {
        this.failCount++;
      } else if (response.status === 'NOT_EXECUTED') {
        this.notExecutedCount++;
      }
    });
  } else {
    console.log('No products available.');
  }
}

// dummyData:TestCase[] = [
//   {
//     "id": 14,
//     "input1": "4",
//     "input2": "10",
//     "result": "14",
//     "status": "Passed",
//     "projectEntity": 1
//   },
//   {
//     "id": 14,
//     "input1": "4",
//     "input2": "10",
//     "result": "14",
//     "status": "Not Executed",
//     "projectEntity": 3
//   }, {
//     "id": 14,
//     "input1": "4",
//     "input2": "10",
//     "result": "14",
//     "status": "Failed",
//     "projectEntity": 2
//   }, {
//     "id": 14,
//     "input1": "4",
//     "input2": "10",
//     "result": "14",
//     "status": "Blocked",
//     "projectEntity": 1
//   }, {
//     "id": 14,
//     "input1": "4",
//     "input2": "10",
//     "result": "14",
//     "status": "Passed",
//     "projectEntity": 1
//   }, {
//     "id": 14,
//     "input1": "4",
//     "input2": "10",
//     "result": "14",
//     "status": "Failed",
//     "projectEntity": 2
//   }, {
//     "id": 14,
//     "input1": "4",
//     "input2": "10",
//     "result": "14",
//     "status": "Not Executed",
//     "projectEntity": 3
//   },
// ];
// products1:Project[]=[
//   {
//     "id": 1,
//     "projectTitle": "Addition",
//     "description": "Addition of two numbers",
//   },
//   {
//     "id": 2,
//       "projectTitle": "Subtraction",
//       "description": "Subtraction of two numbers"
//   },
//   {
//     "id": 3,
//     "projectTitle": "Multiplication",
//     "description": "Multiplication of two numbers"
//   }
// ];


// getFilteredResponse(){
//   this.products=this.dummyData.filter((response)=>{
//     return response.projectEntity==this.id;
//   })
// }
// getProjectTitle(){
//   this.projectTitle=this.products1.filter((response:any)=>{
//     if(response.id==this.id)
//     return response;
//   })

// }

}
