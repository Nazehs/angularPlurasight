import { Component, OnInit } from '@angular/core';
import { USerAuthService } from '../shared/user.auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
    `em {float:right;color:#e05c65; padding-left:10px;}`
  ]
})
export class LoginComponent implements OnInit {
  // form inputs for binding
  userName; password;

  isMouseEnter;

  constructor(private authService: USerAuthService, private router: Router) {

  }

  ngOnInit() {
  }

  login(loginForm) {
    console.log(loginForm.value);

    this.authService.loginUser(loginForm.userName, loginForm.password);

    this.router.navigate(['events']);

  }

  // Consolas, 'Courier New', monospace


  cancelLogin() {
    this.router.navigate(['/events'])
  }

}
