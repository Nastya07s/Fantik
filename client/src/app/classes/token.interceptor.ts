import {Injectable} from "@angular/core";
import {AuthService} from "../services/auth.service";
import {HttpInterceptor} from "@angular/common/http/src/interceptor";
import {HttpEvent, HttpHandler, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable(

)
export class TokenInterceptor implements HttpInterceptor{

  constructor(private authService: AuthService){

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.authService.isAuthenticated()){
      req = req.clone({
        setHeaders:{
          Authorization: this.authService.getToken()
        }
      })
    }
    return next.handle(req);
  }
}
