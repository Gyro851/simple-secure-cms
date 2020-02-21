import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public name: String;
  public catimageurl: String;
  public catfacts: String;
  public isAdmin: Boolean;
  constructor(public api: ApiService) { }
  /**
  * @method attempts to retrieve the userToken from local storage.
            performs an API request to determine whether the user
            is an Administator.
  */
  ngOnInit() {
    if (localStorage.key(0) == 'userToken') {
      this.api.checkForAdmin().then((res: any) => {
        if ( JSON.stringify(Object.values(res[0])) == '[1]'){
          this.isAdmin = true;
        } else {
          alert('You are not an Administator!');
          window.location.href = 'http://localhost:4200/home';
          }
      });
    } else {
      alert('You are not logged in!');
      window.location.href = 'http://localhost:4200/login';
      localStorage.clear();
      }
  }

  res() {
    this.api.createCatPage(this.name,this.catimageurl,this.catfacts);
  }

}
