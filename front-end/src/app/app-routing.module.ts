import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActorsIndexComponent } from './actors/actors-index/actors-index.component';
import { CreateActorComponent } from './actors/create-actor/create-actor.component';
import { EditActorComponent } from './actors/edit-actor/edit-actor.component';
import { CreateGenreComponent } from './genres/create-genre/create-genre.component';
import { EditGenresComponent } from './genres/edit-genres/edit-genres.component';
import { GenresIndexComponent } from './genres/genres-index/genres-index.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CreateMovieComponent } from './movies/create-movie/create-movie.component';
import { EditMovieComponent } from './movies/edit-movie/edit-movie.component';
import { CreateTheaterComponent } from './theaters/create-theater/create-theater.component';
import { EditTheaterComponent } from './theaters/edit-theater/edit-theater.component';
import { TheatersIndexComponent } from './theaters/theaters-index/theaters-index.component';

const routes = [
  {path: '', component: LandingPageComponent},

  {path: 'genres', component: GenresIndexComponent},
  {path: 'genres/create', component: CreateGenreComponent},
  {path: 'genres/edit/:id', component: EditGenresComponent},
  
  {path: 'actors', component: ActorsIndexComponent},
  {path: 'actors/create', component: CreateActorComponent},
  {path: 'actors/edit/:id', component: EditActorComponent},
  
  {path: 'theaters', component: TheatersIndexComponent},
  {path: 'theaters/create', component: CreateTheaterComponent},
  {path: 'theaters/edit/:id', component: EditTheaterComponent},
  
  {path: 'movies/create', component: CreateMovieComponent},
  {path: 'movies/edit/:id', component: EditMovieComponent},

  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
