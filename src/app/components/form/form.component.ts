import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
constructor(private route:Router,private messageService:MessageService){}
@Input() username:any;
@Input() password:any;
userName:any;
Password:any;
enable:boolean=false;
submit(){
  // if(this.username===this.userName && this.password===this.Password)
  // {
    this.route.navigate(['/home']);
  // }
  // else{
  //   this.messageService.add({ severity: 'error', summary: 'Invalid', detail: 'Incorrrect User Credentials' });
  // }
}

}
