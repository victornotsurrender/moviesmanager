import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  constructor() { }

  @Input()
  movies;

  ngOnInit(): void {
  }

  remove(movieIndex: number){
    this.movies.splice(movieIndex, 1);
  }

  processVote(vote: number): void {
    alert('Thanks for your '+vote);
  }

}
