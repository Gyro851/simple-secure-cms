import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {

  constructor(public http:HttpClient) {}

  /**
  * @method {POST}
  * @param {String} username
  * @param {String} password
  * @return {String} userToken
  */

  login(username, password) {
    function redirect(){
      window.location.href = 'http://localhost:4200/home';
    }
    this.http.post(`http://localhost:1337/login?username=${username}&password=${password}`, {})
        .subscribe(
          (data: String) => {
            localStorage.setItem("userToken", data.trim());
            redirect();
          },
          error => {
            alert('Invalid username or password');
          });
  }
  /**
  * @ method {POST}
  * @param {String} username
  * @param {String} password
  * @return {String} userToken, or error.
  */
  createUser(username, password) {
    function redirect(){
      window.location.href = 'http://localhost:4200/home';
    }
    this.http.post(`http://localhost:1337/users?username=${username}&password=${password}`, {})
        .subscribe(
          (data: String) => {
            localStorage.setItem("userToken", data.trim());
            redirect();
          },
          error => {
            alert('Username already exists');
          });
  }
  /**
  * @method {GET}
  * @return {Object} returns an object containing the pagesid for each page the
                     user has access to.
  */
  checkPermissions() {
    const token: String = localStorage.getItem('userToken');
    return new Promise((resolve, reject) => {
      this.http.get(`http://localhost:1337/permissions?userToken=` + token.trim())
        .subscribe(data => {
          resolve(data);
        });
    });
  }

  /**
  * @method {GET}
  * @param {String} pagesid
  * @return {Object} returns an object containing the pagesid, name, catimageurl
                     and catfacts for the page that the user is attempting to
                     access.
  */

  getCatPage(pagesid) {
    const token: String = localStorage.getItem('userToken');
    return new Promise((resolve, reject) => {
      this.http.get(`http://localhost:1337/pages?userToken=${token.trim()}&pagesid=${pagesid}`)
        .subscribe(data => {
          resolve(data);
        });
    })
  }
  /**
  * @method {GET}
  * @return {Object} returns an object containing information which can be used
                     to determine whether the logged in user is an admin.
  */
  checkForAdmin() {
    const token: String = localStorage.getItem('userToken');
    return new Promise((resolve, reject) => {
      this.http.get(`http://localhost:1337/admin?userToken=${token.trim()}`)
        .subscribe(data => {
          resolve(data);
        });
    });
  }
  /**
  * @method {POST}
  * @param {String} name
  * @param {String} catimageurl
  * @param {String} catfacts
  * @return {Object} returns an object containing the name, catimageurl
                     and catfacts for the page that the admin is attempting to
                     create.
  */
  createCatPage(name, catimageurl, catfacts) {
    const token: String = localStorage.getItem('userToken');
    this.http.post(`http://localhost:1337/pages?userToken=${token.trim()}&name=${name}&catimageurl=${catimageurl}&catfacts=${catfacts}`, {})
      .subscribe(data => {});
  }
}
