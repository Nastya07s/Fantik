import { Component, OnInit } from '@angular/core';
import {Genre} from "../models/genre";
import {MainService} from "../services/main.service";

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {

  genres: Genre[];

  constructor(private ms: MainService) { }

  ngOnInit() {
    // this.ms.getGenres().subscribe((genres: Genre[])=> this.genres = genres);
  }

}
