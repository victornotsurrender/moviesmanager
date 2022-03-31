import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filter-movies',
  templateUrl: './filter-movies.component.html',
  styleUrls: ['./filter-movies.component.css']
})
export class FilterMoviesComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private location: Location,
    private activatedRoute: ActivatedRoute) { }

  form: FormGroup;

  originalForm: FormGroup;

  genres = [
    {id: 1, name: 'Drama'},
    {id: 2, name: 'Comedia'},
    {id: 3, name: 'Suspenso'},
    {id: 4, name: 'Romance'}
  ];

  movies = [
    {title: 'Bleach Ruujin Yakka', isFutureMovie: false, isNxtMovie: true, genres: [2,3,4], poster: 'https://cdn11.bigcommerce.com/s-nq6l4syi/images/stencil/1280x1280/products/149759/390824/199625-1024__27105.1643727897.jpg?c=2?imbypass=on'},
    {title: 'The Universe of Treasures', isFutureMovie: true, isNxtMovie: false, genres: [1,2], poster: 'https://i.pinimg.com/originals/7f/10/54/7f1054df89f261321f68ef2d9700d710.jpg'}
  ];

  originalMovies = this.movies;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: '',
      genreId: 0,
      isFutureMovie: false,
      isNxtMovie: false
    });
    this.originalForm = this.form;
    this.readValuesURL();
    this.filterMovies(this.form.value);

    this.form.valueChanges.subscribe(values => {
      this.movies = this.originalMovies;
      this.filterMovies(values);
      this.writeSearchingParamsAtURL();
    });
  }

  private readValuesURL(){
    this.activatedRoute.queryParams.subscribe((params) => {
      var obj: any = {};

      if ( params.title ){
        obj.title = params.title;
      }

      if ( params.genreId ){
        obj.genreId = parseInt( params.genreId );
      }

      if ( params.isFutureMovie ){
        obj.isFutureMovie = params.isFutureMovie;
      }
      
      if ( params.isNxtMovie ){
        obj.isNxtMovie = params.isNxtMovie;
      }

      console.log(obj);

      this.form.patchValue(obj);
    });
  }

  private writeSearchingParamsAtURL(){
    const queryString: string[] = [];
    var formValues = this.form.value;
    
    if ( formValues.title ){
      queryString.push(`title=${formValues.title}`);
    }

    if ( formValues.genreId !== 0 ){
      queryString.push(`genreId=${formValues.genreId}`);
    }

    if ( formValues.isFutureMovie ){
      queryString.push(`isFutureMovie=${formValues.isFutureMovie}`);
    }
    
    if ( formValues.isNxtMovie ){
      queryString.push(`isNxtMovie=${formValues.isNxtMovie}`);
    }

    this.location.replaceState('movies/search', queryString.join('&'));
  }

  filterMovies(values: any){
    
    if ( values.title ){
      this.movies = this.movies.filter(movie => movie.title.indexOf(values.title) !== -1);
    }

    if ( values.genreId !== 0 ){
      this.movies = this.movies.filter(movie => movie.genres.indexOf(values.genreId) !== -1);
    }
    
    if ( values.isFutureMovie ){
      this.movies = this.movies.filter(movie => movie.isFutureMovie);
    }
    
    if ( values.isNxtMovie ){
      this.movies = this.movies.filter(movie => movie.isNxtMovie);
    }
  }

  clear(){
    this.form.patchValue( this.originalForm );
  }

}
