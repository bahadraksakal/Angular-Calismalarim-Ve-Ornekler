import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { AccountService } from '../services/account.service';
import { User } from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
  }

  model:User = new User();

  login(form: NgForm){
      this.accountService.login(this.model);
      console.log(this.model.userName);
      console.log(this.model.password);
      console.log(this.accountService.isLoggedIn());
  }

}
