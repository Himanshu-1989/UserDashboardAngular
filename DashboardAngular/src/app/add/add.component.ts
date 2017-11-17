import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonServiceComponent } from '../common.service';
import { RegisterModel } from '../registermodel'
import { URL } from '../urlGlobal';
import { LoginModel } from '../loginmodel';
import { EmailValidator } from '@angular/forms';
import swal from 'sweetalert2'




@Component({
    moduleId: module.id,
    templateUrl: 'add.component.html',
    styleUrls: ['add.component.css']
})

export class AddComponent implements OnInit {
    model: any = {};
    userId: number;
    userStatus: string = "Select Status";
    status = ["Active", "InActive"];
    providerImage: string;
    loginModel: LoginModel;



    ngOnInit() {


    }


    update() {
        this.loginModel = new LoginModel();
        this.loginModel.userId = this.commonServiceComponent.modifyData.userId;
        this.loginModel.userName = this.model.username.toLowerCase();
        this.loginModel.userPassword = this.model.password;
        this.loginModel.userEmail = this.model.email;
        this.loginModel.userLastName = this.model.lastName;
        this.commonServiceComponent.updateUser(this.loginModel)
            .subscribe(users => {
                if ((users.message == "Update successfully" && users.statusCode == "200")) {

                    swal({
                        title: '',
                        text: 'Update Successfully',
                        type: 'success'
                    }).then(function () {
                        ;
                    }
                        );


                    this.router.navigate(['/register']);

                } else {

                    swal({
                        title: '',
                        text: 'Not Able to Update User Detail',
                        type: 'error'
                    })

                }

            });




    }


    duplicateUser() {

    }
    add() {

        this.loginModel = new LoginModel();
        this.loginModel.userName = this.model.username.toLowerCase();
        this.loginModel.userPassword = this.model.password;
        this.loginModel.userStatus = this.userStatus;
        this.loginModel.userEmail = this.model.email;
        this.loginModel.userLastName = this.model.lastName;
        this.commonServiceComponent.duplicateUser(this.loginModel)
            .subscribe(users => {
                if (users.message == "newUser" && users.statusCode == "200") {

                    this.commonServiceComponent.addUser(this.loginModel)
                        .subscribe(users => {
                            if ((users.message == "User Detail Saved" && users.statusCode == "200")) {

                                swal({
                                    title: '',
                                    text: 'Data Save Successfully',
                                    type: 'success'
                                }).then(function () {
                                    ;
                                }
                                    );
                                this.router.navigate(['/register']);
                            } else {

                                swal({
                                    title: '',
                                    text: 'Not Able to Save User Detail',
                                    type: 'error'
                                })

                            }

                        });
                } else {
                    swal({
                        title: '',
                        text: 'Username already exists',
                        type: 'error'
                    })

                }

            });



    }


    back() {
        this.router.navigate(['/register']);
    }

    constructor(private commonServiceComponent: CommonServiceComponent, private router: Router) {
        this.providerImage = URL.PROVIDER_IMAGE;
        this.model.email = "";
        this.model.password = "";
        if (this.commonServiceComponent.action == "modify") {
            this.model.username = this.commonServiceComponent.modifyData.userName;
            this.model.password = this.commonServiceComponent.modifyData.userPassword;
            this.userStatus = this.commonServiceComponent.modifyData.userStatus;
            this.model.lastName = this.commonServiceComponent.modifyData.userLastName;
            this.model.email = this.commonServiceComponent.modifyData.userEmail;
        }

        if (this.commonServiceComponent.userStatus != "admin") {
            this.router.navigate(['']);
        }
    }
}
