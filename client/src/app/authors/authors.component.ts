import { Component, OnInit } from '@angular/core';
import {Genre} from "../models/genre";
import {MainService} from "../services/main.service";
import {User} from "../models/user";

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  authors: User[];

  constructor(private ms: MainService) { }

  ngOnInit() {
    this.ms.getAuthors().subscribe((authors: User[])=> this.authors = authors);
  }

}
