import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { LoginEntity } from 'src/app/models/interfaces';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
constructor(private route:Router,private messageService:MessageService,private session:TokenService){}
@Input() loginCredentials:LoginEntity[]=[];
userName:any;
Password:any;
enable:boolean=false;

submit(){ 
  this.loginCredentials.forEach((response)=>{
    if(response.username===this.userName && response.password===this.Password)
    {
      this.route.navigate(['/home']);
      this.session.login();

    }
  })
  if(this.route.url==='/'){
    this.messageService.add({ severity: 'error', summary: 'Invalid', detail: 'Incorrrect User Credentials' });
  }
 
}

}
