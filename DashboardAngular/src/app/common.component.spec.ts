import { TestBed, inject, tick, fakeAsync } from '@angular/core/testing';
import { CommonServiceComponent } from './common.service';
import { BaseRequestOptions, Http, ConnectionBackend, Response, ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { URL } from './urlGlobal';


describe('CommonComponentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommonServiceComponent,
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

  it('should retrieve Login Results',
    inject([CommonServiceComponent, MockBackend], fakeAsync((commonServiceComponent: CommonServiceComponent, mockBackend: MockBackend) => {
      let res: Response;
      mockBackend.connections.subscribe(c => {
        expect(c.request.url).toBe(URL.LOGIN_URL);
        const response = new ResponseOptions({body: '[{"message":"admin","statusCode":"200"}]'});
        c.mockRespond(new Response(response));
      });
      commonServiceComponent.loginAuthentication("admin").subscribe((response) => {
        res = response;
      });
      tick();
      expect(res[0].message).toBe('admin');
    }))
  );

  

 });