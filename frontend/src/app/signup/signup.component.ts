import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public username: String;
  public password: String;

  constructor(public api: ApiService) { }

  ngOnInit() { }

  reg() {
    this.api.createUser(this.username, this.password);
  }
}
