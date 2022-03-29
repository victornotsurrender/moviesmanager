import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { genreCreationDTO } from '../genre-form/genre';

@Component({
  selector: 'app-create-genre',
  templateUrl: './create-genre.component.html',
  styleUrls: ['./create-genre.component.css']
})
export class CreateGenreComponent{

  constructor(private router: Router) {}

  saveChanges(genre: genreCreationDTO): void{
    //mermelada to do
    this.router.navigate(['/genres']);
  }

}
