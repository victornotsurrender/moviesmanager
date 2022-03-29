import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filter-movies',
  templateUrl: './filter-movies.component.html',
  styleUrls: ['./filter-movies.component.css']
})
export class FilterMoviesComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form: FormGroup;

  ngOnInit(): void {
  }

}
