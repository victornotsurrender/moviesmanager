import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css']
})
export class CreateMovieComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  saveChanges(): void {
    //mermelada to do
    this.router.navigate(['']);
  }

}
