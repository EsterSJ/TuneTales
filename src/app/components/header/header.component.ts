import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor (public UserService: UserService, public router: Router) {}

  public log_out(){
    this.UserService.user = null;
    this.UserService.logueado = false;
    this.router.navigateByUrl('/');

  }
  
}
