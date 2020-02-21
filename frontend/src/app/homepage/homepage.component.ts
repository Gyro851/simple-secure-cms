import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  public pages = [];

  constructor(public api: ApiService) { }

  logout(){
    localStorage.clear();
  }

  ngOnInit() {
    /**
    * @method attempts to retrieve the userToken from local storage.
              performs an API request to see which pages the User
              has access to.
    */
    const token = localStorage.getItem("userToken");
    var index = localStorage.key(0);
    if (index == 'userToken') {
      this.api.checkPermissions().then((res: any) => {
        if (res && res.rows) {
            this.pages = res.rows;
        }
      });
    } else {
      alert('You are not logged in!');
      window.location.href = 'http://localhost:4200/login';
      localStorage.clear();
      }
  }

}
