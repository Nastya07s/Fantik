import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {User} from "../models/user";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService{

  uri = environment.apiUrl;

  constructor(private http: HttpClient){

  }

  getUser(): Observable<User>{
    return this
      .http
      .get<User>(`${this.uri}`+'/user');
  }
}
