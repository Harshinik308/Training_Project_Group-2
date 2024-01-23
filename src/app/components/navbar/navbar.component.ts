import { Component,Input } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
@Input() title:string='';
@Input()dashboard:boolean=false;
constructor(private session:TokenService){}
logout(){
  this.session.logout();
}
}
