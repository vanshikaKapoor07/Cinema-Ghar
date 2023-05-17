import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
userName = ""
password = ""
errorMsg = ""

constructor(
  private auth  : AuthService,
  private router: Router
  ) {}

ngOnInit(): void {

}
login(){
  if(this.userName.trim().length === 0) {
    this.errorMsg = 'Username is required'
  } else if(this.password.trim().length === 0) {
    this.errorMsg = 'Password is required'
  } else {
    this.errorMsg = ''
    const res = this.auth.login(this.userName, this.password)
    if(res === 200) {
      this.router.navigate(['home'])
    }
    if(res === 403) {
      this.errorMsg = 'Invalid Credentials'
    }
  }
}
}
