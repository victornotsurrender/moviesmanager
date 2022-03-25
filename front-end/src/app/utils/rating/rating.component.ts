import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  @Input()
  maxRating = 5;
  @Input()
  selectedRating = 0;
  @Output()
  rated: EventEmitter<number> = new EventEmitter<number>();
  ratingArr;
  voted = false;
  lastSelected = 0;

  constructor() { }

  ngOnInit(): void {
    this.ratingArr = Array(this.maxRating).fill(0);
  }

  mouseEnterStar(index: number): void {
    this.selectedRating = index+1;
  }

  mouseLeaveStar(): void {
    if ( this.selectedRating !== 0 ){
      this.selectedRating = this.lastSelected;
    }
    else {
      this.selectedRating = 0;
    }
  }

  rate(index: number): void {
    this.selectedRating = index+1;
    this.voted = true;
    this.lastSelected = this.selectedRating;
    this.rated.emit(this.selectedRating);
  }

}
