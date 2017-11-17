import { TestBed, inject, tick, fakeAsync } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { BaseRequestOptions, Http, ConnectionBackend, Response, ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';


describe('LoginComponentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginComponent,
        {
          provide: Http, useFactory: (backend: ConnectionBackend, defaultOptions: BaseRequestOptions) => {
          return new Http(backend, defaultOptions);
        }, deps: [MockBackend, BaseRequestOptions]
        },
        {provide: MockBackend, useClass: MockBackend},
        {provide: BaseRequestOptions, useClass: BaseRequestOptions}
      ]
    });
  }); 

  it('should return true if the form control is valid', () => {
    inject([LoginComponent], fakeAsync((loginComponent: LoginComponent) => {
      loginComponent.login("jatin");
    expect(loginComponent.userName).toBe("jatin");

    }))
  });


});