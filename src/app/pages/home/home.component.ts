import { Component } from '@angular/core';
import { Project } from 'src/app/models/interfaces';
import { ApiService } from 'src/app/services/api.service';

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
  constructor(private api:ApiService){}
  ngOnInit(){
    this.fetchProjectDetails();
    
  }
  fetchProjectDetails(){
    this.api.fetchProjectDetails().subscribe({
      next:(response:any)=>{
        this.projects=response;
      }
    })
  }

}
