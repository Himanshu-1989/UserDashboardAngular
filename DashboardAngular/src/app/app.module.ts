import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index'
import { AddComponent } from './add/index'

import { AppComponent } from './app.component';
import { routing }        from './app.routing';
import { RouterModule, Routes } from '@angular/router';
import {CommonServiceComponent } from './common.service';
import {GlobalUrl} from  './urlGlobal';
import { HttpModule } from '@angular/http';
import { MaterializeModule } from 'angular2-materialize';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import {FilterPipe} from './commonpipe';
import {RegisterModel} from './registermodel';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent ,
    AddComponent,
    FilterPipe
    
    
    
    
  
  ],
  imports: [
    BrowserModule,
    NgxDatatableModule,
    routing,
    FormsModule ,
    HttpModule  ,
    RouterModule,
    Ng2SmartTableModule,
    MaterializeModule.forRoot()
    
  ],
  providers: [CommonServiceComponent,GlobalUrl],
  bootstrap: [AppComponent]
})
export class AppModule { }
 