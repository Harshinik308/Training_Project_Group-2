import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from 'src/app/models/interfaces';
import { ApiService } from 'src/app/services/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  constructor(private route:Router,private api:ApiService){}
  @Input()products:Project[]=[];
  expanded:boolean=false;
  visible: boolean = false;
  cols:any=[
    'id','projectTitle','description'
  ]
  headers:any=[
    'id','Project Title','Description'
  ]
  projectEntityId:any;
  postData:any={
    input1:0,
    input2:0,
    result:0,
    status:'',
    projectEntity:''
  }
  ngOnInit(){
   
  }
  openDashboard(id:any){
    this.route.navigate(['/dashboard',id])
  }
  showDialog(id:any) {
    this.projectEntityId=id;
    this.visible = true;
  }
  performOperation(id:any){
    if(id==1){
      if(parseInt(this.postData.input1)+parseInt(this.postData.input2)==parseInt(this.postData.result))
      this.postData.status='SUCCESS';
      else
      this.postData.status='FAILURE';
    }
    else if(id==2){
      if(this.postData.input1-this.postData.input2==this.postData.result)
      this.postData.status='SUCCESS';
      else
      this.postData.status='FAILURE';
    }
    else if(id==3){
      if(this.postData.input1*this.postData.input2==this.postData.result)
      this.postData.status='SUCCESS';
      else
      this.postData.status='FAILURE';
    }
  }
  exceptionalCases(){
    console.log( typeof(this.postData.result));
    
    // if((typeof(this.postData.input1)=='string' || typeof(this.postData.input2)=='string') || typeof(this.postData.result)=='string'){
    //   this.postData.status='BLOCKED';
    // }
    // else 
    if(this.postData.input1.length==0 || this.postData.input2.length==0 || this.postData.length==0){
      this.postData.status='NOT_EXECUTED';
    }
    else{
      this.performOperation(this.projectEntityId);
    }
  }
  operationsApi(){
    switch(this.projectEntityId){
      case 1:
        this.api.postAdditionTestCases(this.postData,this.projectEntityId).subscribe((response)=>{
          console.log("Addition Performed",response);
        }) 
      break;
      case 2:
        this.api.postSubtractionTestCases(this.postData,this.projectEntityId).subscribe((response)=>{
          console.log("Subtraction Performed",response);
        })
        break;
      case 3:
        this.api.postMultiplicationTestCases(this.postData,this.projectEntityId).subscribe((response)=>{
          console.log("Multiplication performed",response);
        })
        break;
    }
  }
  postTestCase(){
    this.postData.projectEntity=this.projectEntityId;
    this.exceptionalCases();
    this.operationsApi();
    Swal.fire({
      title: 'SUCCESSFULLY SUBMITTED',
      text: 'Your testcase has been submitted successfully',
      icon: 'success',
      confirmButtonText: 'OK'
    });
    this.visible=false;
    
  }
}
