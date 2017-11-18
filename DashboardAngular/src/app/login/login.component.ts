import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonServiceComponent } from '../common.service';
import{LoginModel} from '../loginmodel'
import swal from 'sweetalert2'




@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css'] 
})

export class LoginComponent implements OnInit {

    model: any = {};
    userResult=[];
    blankUser:boolean;
    checkResult:boolean;
    loginModel:LoginModel;

    ngOnInit() {


    }
    constructor(private commonServiceComponent: CommonServiceComponent, private router: Router) {
    } 

    login(user) {
           this.loginModel=new LoginModel();
           this.loginModel.userName=this.model.username.toLowerCase();
           this.loginModel.userPassword=this.model.password;
  this.commonServiceComponent.loginAuthentication(this.loginModel)
        .subscribe(users => {
            if (users.message.toLowerCase()=="admin" && users.statusCode=="200") {
                this.commonServiceComponent.userName = user;
                this.commonServiceComponent.userStatus="admin";
                this.router.navigate(['/register']);
            }
         else if(users.message=="userFound" && users.statusCode=="200")  
        {
            user = "Hi " + user;
            swal({
                title: user,
                text: 'You are Login Succesfully!',
                type: 'success'
            }).then(function () {
                ;
            }
                );
        }  else {
            user = "Sorry " + user
            swal({
                title: user,
                text: 'Unauthorize login attempt!',
                type: 'error'
            })
            this.model.username = "";
        }

        });

        }
        
        }
