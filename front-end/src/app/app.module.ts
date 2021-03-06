import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesListComponent } from './movies/movies-list/movies-list.component';
import { GenericListComponent } from './utils/generic-list/generic-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MenuComponent } from './menu/menu.component';
import { RatingComponent } from './utils/rating/rating.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { GenresIndexComponent } from './genres/genres-index/genres-index.component';
import { CreateGenreComponent } from './genres/create-genre/create-genre.component';
import { ActorsIndexComponent } from './actors/actors-index/actors-index.component';
import { CreateActorComponent } from './actors/create-actor/create-actor.component';
import { CreateMovieComponent } from './movies/create-movie/create-movie.component';
import { CreateTheaterComponent } from './theaters/create-theater/create-theater.component';
import { TheatersIndexComponent } from './theaters/theaters-index/theaters-index.component';
import { EditActorComponent } from './actors/edit-actor/edit-actor.component';
import { EditMovieComponent } from './movies/edit-movie/edit-movie.component';
import { EditTheaterComponent } from './theaters/edit-theater/edit-theater.component';
import { EditGenresComponent } from './genres/edit-genres/edit-genres.component';
import { GenreFormComponent } from './genres/genre-form/genre-form.component';
import { FilterMoviesComponent } from './movies/filter-movies/filter-movies.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    GenericListComponent,
    MenuComponent,
    RatingComponent,
    LandingPageComponent,
    GenresIndexComponent,
    CreateGenreComponent,
    ActorsIndexComponent,
    CreateActorComponent,
    CreateMovieComponent,
    CreateTheaterComponent,
    TheatersIndexComponent,
    EditActorComponent,
    EditMovieComponent,
    EditTheaterComponent,
    EditGenresComponent,
    GenreFormComponent,
    FilterMoviesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
