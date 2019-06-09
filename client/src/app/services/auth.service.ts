import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";
import {User} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class AuthService{

  private token = null;

  uri = environment.apiUrl;

  constructor(private http: HttpClient){

  }

  register(user): Observable<User>{
    return this.http.post<User>(`${this.uri}`+'/auth/register', user)
  }

  login(user): Observable<{token:string}>{
    return this.http.post<{token:string}>(`${this.uri}`+'/auth/login',user)
      .pipe(
        tap(
          ({token})=>{
            localStorage.setItem('auth-token', token);
            this.setToken(token);
          }
        )
      )
  }

  setToken(token:string){
    this.token = token;
  }

  getToken():string{
    return this.token
  }

  isAuthenticated(): boolean{
    return !!this.token
  }

  logout(){
    this.setToken(null);
    localStorage.clear;
  }

}
