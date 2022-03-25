import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActorsIndexComponent } from './actors/actors-index/actors-index.component';
import { CreateActorComponent } from './actors/create-actor/create-actor.component';
import { CreateGenreComponent } from './genres/create-genre/create-genre.component';
import { GenresIndexComponent } from './genres/genres-index/genres-index.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CreateMovieComponent } from './movies/create-movie/create-movie.component';
import { CreateTheaterComponent } from './theaters/create-theater/create-theater.component';
import { TheatersIndexComponent } from './theaters/theaters-index/theaters-index.component';

const routes = [
  {path: '', component: LandingPageComponent},

  {path: 'genres', component: GenresIndexComponent},
  {path: 'genres/create', component: CreateGenreComponent},
  
  {path: 'actors', component: ActorsIndexComponent},
  {path: 'actors/create', component: CreateActorComponent},
  
  {path: 'theaters', component: TheatersIndexComponent},
  {path: 'theaters/create', component: CreateTheaterComponent},
  
  {path: 'movies/create', component: CreateMovieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
