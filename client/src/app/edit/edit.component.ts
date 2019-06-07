import { Component, OnInit } from '@angular/core';
import {Genre} from "../models/genre";
import {MainService} from "../services/main.service";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  genres: Genre[];

  constructor(private ms: MainService) { }

  ngOnInit() {
    this.ms.getGenres().subscribe((genres: Genre[])=> this.genres = genres);
  }

}
