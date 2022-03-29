import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { genreCreationDTO } from '../genre-form/genre';

@Component({
  selector: 'app-edit-genres',
  templateUrl: './edit-genres.component.html',
  styleUrls: ['./edit-genres.component.css']
})
export class EditGenresComponent implements OnInit {

  constructor(private router: Router) { }

  model: genreCreationDTO;

  ngOnInit(): void {
  }

  saveChanges(genre: genreCreationDTO): void{
    //mermelada to do
    this.router.navigate(['/genres']);
  }

}
