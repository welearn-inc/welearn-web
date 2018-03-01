import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { CookieService } from 'ngx-cookie-service';
@Injectable()
export class InterceptorService implements HttpInterceptor{

  constructor() { }

  intercept (req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const authReq = req.clone({
      setHeaders: {
        "Content-Type": "application/json"
      }
      
    });
   // Authorization: `JWT ${jwttoken}`,
       // 'X-CSRFToken': `${csrftoken}`
    console.log ("interceptor called ...");

    return next.handle(authReq);
  }
   
}
