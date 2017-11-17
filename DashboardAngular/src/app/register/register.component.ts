import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonServiceComponent } from '../common.service';
import{RegisterModel} from '../registermodel'
import { URL } from '../urlGlobal';
import swal from 'sweetalert2'




@Component({
    moduleId: module.id,
    templateUrl: 'register.component.html',
    styleUrls: ['register.component.css']
})

export class RegisterComponent implements OnInit {
    userResult: any;
    registerModel:RegisterModel;
	step1: boolean;
    rows=[];
    searchby:string=null;
    providerImage:string;
    
    

     

    ngOnInit() {


    }
 
 
    getRegistrationData() {
        this.registerModel=new RegisterModel();
        this.registerModel.userName=this.commonServiceComponent.userName;
         this.commonServiceComponent.getRegistration(this.registerModel).subscribe(users => {
            this.userResult = users;
		     }
        );
    }
   delete(row){
    this.registerModel=new RegisterModel();
    this.registerModel.userId=row.userId;
        this.commonServiceComponent.deleteUser(this.registerModel)
        .subscribe(users => {
    if((users.message=="Delete successfully" && users.statusCode=="200")){
          
            swal({
                title: '',
                text: 'Delete successfully',
                type: 'success'
            }).then(function () {
                ;
            }
                );
              this.getRegistrationData();
        }  else {
           
            swal({
                title: '',
                text: 'Not Able to Delete User Detail',
                type: 'error'
            })
            
        }
    
        });
     
       
    
    
     }

    calladd(){
        this.router.navigate(['add']); 
        this.commonServiceComponent.action="add";
    }
    modifyUser(row){
        this.commonServiceComponent.action="modify";
        this.commonServiceComponent.modifyData=row;
        this.router.navigate(['add']);
    }
    back(){
        this.router.navigate(['']);
    }

    constructor(private commonServiceComponent: CommonServiceComponent, private router: Router) {
        this.providerImage=URL.PROVIDER_IMAGE;
        this.step1 = true;
        if (this.commonServiceComponent.userStatus.toLowerCase() != "admin") {
            this.router.navigate(['']);
        } else {
            this.getRegistrationData();
        }

    }
}
