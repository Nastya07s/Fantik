import { Component, OnInit } from '@angular/core';
import {User} from "../models/user";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  user: User;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUser().subscribe((user: User)=> this.user=user);
  }

}
