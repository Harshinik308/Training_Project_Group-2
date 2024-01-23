import { Component } from '@angular/core';
import { loginCredential } from 'src/app/models/dummy';
import { LoginEntity } from 'src/app/models/interfaces';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
constructor(private api:ApiService){}
loginCredentials:LoginEntity[]=[];
ngOnInit(){
  this.fetchLoginData();
  
}
fetchLoginData(){
  this.api.fetchLoginCredentials().subscribe((res:any)=>{
    this.loginCredentials=res;
     console.log(this.loginCredentials);
  })
}

}
