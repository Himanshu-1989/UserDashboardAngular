import { Component, OnInit, Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from "rxjs/Rx";
import 'rxjs/add/operator/map';
import { URL } from './urlGlobal';
@Injectable()
export class CommonServiceComponent {
    users: any;
    userName: string;
    RegistrationData: any;
    headers:any;
    userStatus:string="noValue";
    action:string="notDefine";
    modifyData:any;

    constructor(private http: Http) {
        
    }

    loginAuthentication(loginModel) {
    // return this.http.get(URL.LOGIN_URL).map(res => res.json());
    return this.http.post(URL.LOGIN_URL, loginModel, this.addCommonHeader())
        .map((res: Response) => res.json());
  }

    getRegistration(regitration) {
     return this.http.get(URL.REGISTRATION_URL).map(res => res.json());
     
}

duplicateUser(loginModel){
    return this.http.post(URL.DUPLICATE_USER, loginModel, this.addCommonHeader())
         .map((res: Response) => res.json());
}

addUser(userModel){
    return this.http.post(URL.ADD_USER_URL, userModel, this.addCommonHeader())
        .map((res: Response) => res.json());

}

deleteUser(ID){
    return this.http.post(URL.DELETE_USER_URL, ID, this.addCommonHeader())
    .map((res: Response) => res.json());



}
 
updateUser(userModel){
    return this.http.post(URL.UPDATE_USER_URL, userModel, this.addCommonHeader())
        .map((res: Response) => res.json());

}


addCommonHeader() {
        
        let headers = new Headers();
        
        headers.append('X-Requested-With', 'XMLHttpRequest');
        
        headers.append('Content-Type', 'application/json');
        
        headers.append('Accept', 'application/json');
        
        let options = new RequestOptions({ headers: headers });
        
        return options;
        
        }

}