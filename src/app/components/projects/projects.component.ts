import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from 'src/app/models/interfaces';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  constructor(private route:Router){}
  cols:any=[
    'id','projectTitle','description'
  ]
  headers:any=[
    'id','Project Title','Description'
  ]
  @Input()products:Project[]=[];
  expanded:boolean=false;
  visible: boolean = false;

  showDialog() {
      this.visible = true;
  }
  openDashboard(id:any){
    this.route.navigate(['/dashboard',id])
  }
}
