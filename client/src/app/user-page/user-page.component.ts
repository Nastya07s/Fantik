import { Component, OnInit } from '@angular/core';
import {User} from "../models/user";
import {Article} from "../models/article";
import {AuthService} from "../services/auth.service";
import {UserService} from "../services/user.service";

import {jwt_decode} from 'jwt-decode';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  user: User;

  constructor(private userService: UserService) { }

  ngOnInit() {
    // this.authService.getArticles().subscribe((data:Article[])=>this.articles = data);
    this.userService.getUser().subscribe((user: User)=> {console.log(user);this.user=user});
    // this.user = jwt_decoded('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Imx1bmkiLCJ1c2VySWQiOiI1ZDAxM2EyZjRmNDEzNTFmMDRhYjlhYTEiLCJjb25maXJtZWQiOnRydWUsImlhdCI6MTU2MDM2MjMxMiwiZXhwIjoxNTYwMzY1OTEyfQ.S8ONkKidyCh_DU4dauwCVYu30iEScVa7OMQVZHEIXM8');
  }

}
