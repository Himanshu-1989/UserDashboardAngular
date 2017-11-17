import { Component, OnInit, Injectable } from '@angular/core';


export const URL = Object.freeze({
 //LOGIN_URL:'assets/mock-data/login.json?',
  ADD_USER_URL:'user/adduser',
  UPDATE_USER_URL:'user/updateuser',
  DELETE_USER_URL:'user/deleteuser',
  DUPLICATE_USER:'user/duplicate',
  LOGIN_URL:'user/authenticateuser',
  REGISTRATION_URL:'user/userlist',
  //REGISTRATION_URL:'assets/mock-data/register.json?',
  PROVIDER_IMAGE:'assets/images/provider.png'



});


@Injectable()
export class GlobalUrl{


}

