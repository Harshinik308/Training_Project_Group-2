import { Component } from '@angular/core';
import { Project } from 'src/app/models/interfaces';
import { ApiService } from 'src/app/services/api.service';
import { LoaderService } from 'src/app/services/loader.service';
import { ToasterService } from 'src/app/services/toaster.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  
  // projects:Project[]=[
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
  projects:Project[]=[];
  constructor(private api:ApiService,public loader:LoaderService,private alert:ToasterService){}
  ngOnInit(){
    this.fetchProjectDetails();
    
  }
  fetchProjectDetails(){
    this.loader.showLoader();
    this.api.fetchProjectDetails().subscribe({
      next:(response:any)=>{
        this.loader.hideLoader();
        this.projects=response;
      },
      error: (error)=>{
        this.loader.hideLoader();
        this.alert.errorAlert();
      }
    })
  }

}
