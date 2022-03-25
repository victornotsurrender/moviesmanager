import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  ngOnInit(): void {
    this.nxtMovies = [{
      title: 'Spider-Man the Movie',
      fechaLanzamiento: new Date(),
      price: 1400.99,
      poster: 'https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_QL75_UX180_CR0,NaN,180,266_.jpg'
    },
    {
      title: 'Bat-Man The Dark Knight',
      fechaLanzamiento: new Date(),
      price: 1230.,
      poster: 'https://cdn.vox-cdn.com/thumbor/Kr_zFMNcZmn28_TBF-8YYlhD9gw=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/11694967/0_c9S8ajFBpwX89ZuU.jpeg'
    }];
  }

  nxtMovies;
  futureMovies = [
    {
      title: 'Bleach Ruujin Yakka',
        fechaLanzamiento: new Date(),
        price: 1230.99,
        poster: 'https://cdn11.bigcommerce.com/s-nq6l4syi/images/stencil/1280x1280/products/149759/390824/199625-1024__27105.1643727897.jpg?c=2?imbypass=on'
    },
    {
      title: 'The Universe of Treasures',
        fechaLanzamiento: new Date(),
        price: 1149.99,
        poster: 'https://i.pinimg.com/originals/7f/10/54/7f1054df89f261321f68ef2d9700d710.jpg'
    },
    {
      title: 'La Vida Antes de Ayer',
        fechaLanzamiento: new Date(),
        price: 1000,
        poster: 'https://ih1.redbubble.net/image.1426836447.7801/poster,504x498,f8f8f8-pad,600x600,f8f8f8.jpg'
    }
  ];
}
