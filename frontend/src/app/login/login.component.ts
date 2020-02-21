import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public username: String;
  public password: String;

  constructor(public api: ApiService) { }

  ngOnInit() { }

  reg() {
    this.api.login(this.username, this.password);
  }
}
